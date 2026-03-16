import { GOOGLE_SHEETS_API_KEY, GOOGLE_SHEET_ID, GOOGLE_SHEET_GID, GOOGLE_SHEET_RANGE } from "./links";

export type RosterEntry = {
  name: string;
  email?: string;
  joinedAt?: string;
};

const normalizeHeader = (header: string | null | undefined) =>
  (header || "").toString().trim().toLowerCase();

const findHeaderIndex = (headers: string[], test: RegExp): number =>
  headers.findIndex((h) => test.test(normalizeHeader(h)));

const buildIndexes = (headers: string[]) => {
  return {
    name: findHeaderIndex(headers, /name|full\s*name|display|username/),
    email: findHeaderIndex(headers, /email/),
    joinedAt: findHeaderIndex(headers, /join|date|timestamp|submitted/),
  };
};

const parseRange = (raw: string) => {
  const [sheetPart, rangePart] = raw.split("!");
  if (rangePart !== undefined) {
    return { sheetName: sheetPart || "Sheet1", range: rangePart, sheetSpecified: true };
  }
  // If the value is just "A:D" (no sheet), default to Sheet1.
  return { sheetName: "Sheet1", range: sheetPart || "A:D", sheetSpecified: false };
};

const parseCsv = (csv: string) => {
  const lines = csv
    .trim()
    .split(/\r?\n/)
    .filter((l) => l.trim().length > 0);

  return lines.map((line) => {
    const cells: string[] = [];
    let cur = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        cells.push(cur);
        cur = "";
      } else {
        cur += ch;
      }
    }

    cells.push(cur);
    return cells;
  });
};

export async function fetchRosterEntries(limit?: number): Promise<RosterEntry[]> {
  if (!GOOGLE_SHEET_ID) {
    throw new Error("Google Sheet ID is not configured.");
  }

  const { sheetName: initialSheetName, range: rangePart, sheetSpecified } = parseRange(
    GOOGLE_SHEET_RANGE
  );

  const sheetName = sheetSpecified
    ? initialSheetName
    : GOOGLE_SHEETS_API_KEY && GOOGLE_SHEET_GID
    ? await (async () => {
        const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}`;
        const metaRes = await fetch(metaUrl);
        if (!metaRes.ok) {
          // If metadata can't be fetched, fall back to default sheet name.
          return initialSheetName;
        }
        const meta = await metaRes.json();
        const sheets = meta.sheets || [];
        const targetSheet = sheets.find(
          (s: any) => s.properties?.sheetId === parseInt(GOOGLE_SHEET_GID)
        );
        return targetSheet?.properties?.title || initialSheetName;
      })()
    : initialSheetName;

  const resolvedRange = `${sheetName}!${rangePart}`;

  let values: any[] = [];

  if (GOOGLE_SHEETS_API_KEY) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${resolvedRange}?key=${GOOGLE_SHEETS_API_KEY}`;
    const dataRes = await fetch(url);
    if (!dataRes.ok) {
      throw new Error(`Data API error: ${dataRes.status} ${dataRes.statusText}`);
    }
    const data = await dataRes.json();
    values = data.values || [];
  } else {
    // Fallback: try to fetch a public sheet via the official CSV endpoint.
    // This will work when the sheet is shared "anyone with link can view".
    const csvUrl = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GOOGLE_SHEET_GID}&range=${encodeURIComponent(
      resolvedRange
    )}`;
    const res = await fetch(csvUrl);
    if (!res.ok) {
      throw new Error(`Unable to fetch public sheet: ${res.status} ${res.statusText}`);
    }
    const csv = await res.text();
    values = parseCsv(csv);
  }

  if (!Array.isArray(values) || values.length === 0) return [];

  const headers: string[] = values[0].map((col: any) => (col ?? "").toString());
  const { name: nameIdx, email: emailIdx, joinedAt: joinedAtIdx } = buildIndexes(headers);

  const rows = values.slice(1);
  const entries: RosterEntry[] = rows.map((row: any[]) => {
    const rawName = nameIdx >= 0 ? row[nameIdx] : row[1] ?? row[0];
    const name = rawName ? rawName.toString() : "—";

    const email = emailIdx >= 0 && row[emailIdx] ? row[emailIdx].toString() : undefined;
    const joinedAt =
      joinedAtIdx >= 0 && row[joinedAtIdx] ? row[joinedAtIdx].toString() : undefined;

    return { name, email, joinedAt };
  });

  return limit ? entries.slice(0, limit) : entries;
}
