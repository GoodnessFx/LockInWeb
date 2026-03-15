import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GOOGLE_SHEETS_API_KEY, GOOGLE_SHEET_ID, GOOGLE_SHEET_RANGE, GOOGLE_SHEET_GID } from "@/lib/links";

type RosterEntry = {
  name: string;
  email?: string;
  joinedAt?: string;
};

export function PrivateRoster() {
  const [roster, setRoster] = useState<RosterEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("PrivateRoster: Starting to load roster");
    console.log("API Key present:", !!GOOGLE_SHEETS_API_KEY);
    console.log("Sheet ID:", GOOGLE_SHEET_ID);
    console.log("Range:", GOOGLE_SHEET_RANGE);

    if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
      setError("Google Sheets API not configured.");
      return;
    }

    setLoading(true);

    // First, get spreadsheet metadata to find the sheet name by gid
    const metaUrl = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}`;
    console.log("Fetching metadata URL:", metaUrl.replace(GOOGLE_SHEETS_API_KEY, "[API_KEY]"));

    fetch(metaUrl)
      .then((res) => {
        console.log("Metadata response status:", res.status);
        if (!res.ok) {
          throw new Error(`Metadata API error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((meta) => {
        console.log("Metadata:", meta);
        const sheets = meta.sheets || [];
        const targetSheet = sheets.find((s: any) => s.properties?.sheetId === parseInt(GOOGLE_SHEET_GID));
        const sheetName = targetSheet?.properties?.title || "Sheet1"; // fallback to Sheet1
        console.log("Target sheet name:", sheetName);

        const range = `${sheetName}!${GOOGLE_SHEET_RANGE}`;
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${range}?key=${GOOGLE_SHEETS_API_KEY}`;
        console.log("Fetching data URL:", url.replace(GOOGLE_SHEETS_API_KEY, "[API_KEY]"));

        return fetch(url);
      })
      .then((res) => {
        console.log("Data response status:", res.status);
        if (!res.ok) {
          throw new Error(`Data API error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        if (data.values && Array.isArray(data.values)) {
          // Assume first row is headers, skip it
          const rows = data.values.slice(1);
          console.log("Rows after header:", rows);
          const entries: RosterEntry[] = rows.map((row: string[]) => ({
            name: row[0] || "—",
            email: row[1] || undefined,
            joinedAt: row[2] || undefined,
          }));
          setRoster(entries.slice(0, 20)); // Limit to 20 for display
          console.log("Parsed entries:", entries);
        } else {
          console.log("No values in response");
          setRoster([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load roster", err);
        setError(`Could not load the private roster: ${err.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  // if (!GOOGLE_SHEETS_API_KEY) return null;

  return (
    <section className="py-32 bg-[#16213e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Private <span className="text-[#D4AF37] italic">Roster</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl mb-16 max-w-2xl mx-auto text-center font-light" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          View the list of everyone who has filled the beta application. Real people, real growth.
        </p>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
            <div className="text-[#D4AF37] font-bold tracking-widest text-xs uppercase">Loading Roster...</div>
          </div>
        ) : error ? (
          <div className="text-destructive bg-destructive/10 border border-destructive/20 p-6 rounded-2xl text-center">{error}</div>
        ) : roster.length === 0 ? (
          <div className="text-white/30 text-center py-20 border-2 border-dashed border-white/10 rounded-[3rem]">No entries found yet. Be the first to apply!</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roster.map((entry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="font-bold text-white text-xl mb-1 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{entry.name}</div>
                {entry.email ? <div className="text-sm text-white/40 font-light mb-3">{entry.email}</div> : null}
                {entry.joinedAt ? (
                  <div className="text-[10px] text-[#D4AF37]/60 font-bold uppercase tracking-widest bg-[#D4AF37]/10 inline-block px-3 py-1 rounded-full border border-[#D4AF37]/20">
                    Joined {entry.joinedAt}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
