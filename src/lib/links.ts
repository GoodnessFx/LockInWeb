// Centralized external links and form endpoints.
// Update these by setting the corresponding environment variables in your .env file.
// NEVER commit API keys to version control - keep them in .env.local

export const GOOGLE_FORM_URL =
  (import.meta as any).env?.VITE_GOOGLE_BETA_FORM_URL || "https://forms.gle/Knk7IBbzmV568lu7QxBUgR"; // Using the same ID as WhatsApp as a temporary fix if they are linked, or until the user provides the correct one.

export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/Knk7IBbzmV568lu7QxBUgR";

export const SHEET_API_URL =
  (import.meta as any).env?.VITE_SHEET_API_URL || "";

export const TALLY_URL =
  (import.meta as any).env?.VITE_TALLY_URL || "";

export const X_URL = "https://x.com/lockin_app";

export const TIKTOK_URL =
  (import.meta as any).env?.VITE_TIKTOK_URL || "https://www.tiktok.com/@LockinApp_hq";

// Google Sheets integration (client-side - API key will be exposed, use with caution)
export const GOOGLE_SHEETS_API_KEY =
  (import.meta as any).env?.VITE_GOOGLE_SHEETS_API_KEY || "";

export const GOOGLE_SHEET_ID =
  (import.meta as any).env?.VITE_GOOGLE_SHEET_ID || "1AVbGlCnjx7ImasgmM1gea8rksnfuRWyB1G3zxEotiZs";

export const GOOGLE_SHEET_GID =
  (import.meta as any).env?.VITE_GOOGLE_SHEET_GID || "1754224446";

export const GOOGLE_SHEET_RANGE =
  (import.meta as any).env?.VITE_GOOGLE_SHEET_RANGE || "Sheet1!A:D";

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: "The World Rewards the Ones Who Don't Quit",
    subtitle: "Locked In is your personal focus OS — track your deep work, silence the noise, and build momentum that compounds daily."
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: "The World Rewards the Ones Who Don't Quit",
    subtitle: "Locked In is your personal focus OS — track your deep work, silence the noise, and build momentum that compounds daily."
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: "The World Rewards the Ones Who Don't Quit",
    subtitle: "Locked In is your personal focus OS — track your deep work, silence the noise, and build momentum that compounds daily."
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: "The World Rewards the Ones Who Don't Quit",
    subtitle: "Locked In is your personal focus OS — track your deep work, silence the noise, and build momentum that compounds daily."
  }
];
