const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL as string;

export async function submitToGoogleSheets(
  formName: string,
  data: Record<string, string>
) {
  const payload = {
    formulario: formName,
    data: new Date().toLocaleString("pt-PT"),
    ...data,
  };

  const response = await fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response;
}
