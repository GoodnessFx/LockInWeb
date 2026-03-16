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

export async function fetchRosterEntries(limit?: number): Promise<RosterEntry[]> {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    throw new Error("Google Sheets API not configured.");
  }

  const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}`;
  const metaRes = await fetch(metaUrl);
  if (!metaRes.ok) {
    throw new Error(`Metadata API error: ${metaRes.status} ${metaRes.statusText}`);
  }
  const meta = await metaRes.json();
  const sheets = meta.sheets || [];
  const targetSheet = sheets.find((s: any) => s.properties?.sheetId === parseInt(GOOGLE_SHEET_GID));
  const sheetName = targetSheet?.properties?.title || "Sheet1";

  const range = `${sheetName}!${GOOGLE_SHEET_RANGE}`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${range}?key=${GOOGLE_SHEETS_API_KEY}`;
  const dataRes = await fetch(url);

  if (!dataRes.ok) {
    throw new Error(`Data API error: ${dataRes.status} ${dataRes.statusText}`);
  }

  const data = await dataRes.json();
  const values: any[] = data.values || [];
  if (!Array.isArray(values) || values.length === 0) return [];

  const headers: string[] = values[0].map((col: any) => (col ?? "").toString());
  const { name: nameIdx, email: emailIdx, joinedAt: joinedAtIdx } = buildIndexes(headers);

  const rows = values.slice(1);
  const entries: RosterEntry[] = rows.map((row: any[]) => {
    const rawName = nameIdx >= 0 ? row[nameIdx] : row[1] ?? row[0];
    const name = rawName ? rawName.toString() : "—";

    const email = emailIdx >= 0 && row[emailIdx] ? row[emailIdx].toString() : undefined;
    const joinedAt = joinedAtIdx >= 0 && row[joinedAtIdx] ? row[joinedAtIdx].toString() : undefined;

    return { name, email, joinedAt };
  });

  return limit ? entries.slice(0, limit) : entries;
}
