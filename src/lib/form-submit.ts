export type SubmissionPayload = Record<string, string>;

export async function submitToAppsScript(payload: SubmissionPayload) {
  const url = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined;
  if (!url) {
    console.warn("VITE_GOOGLE_APPS_SCRIPT_URL is not set. Simulating submit.", payload);
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true };
  }
  const form = new FormData();
  Object.entries(payload).forEach(([k, v]) => form.append(k, v));
  const res = await fetch(url, { method: "POST", body: form, mode: "no-cors" as RequestMode });
  return { ok: true, res };
}

export function collectUtm(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
}

