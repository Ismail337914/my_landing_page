import "./globals.css";

export const metadata = {
  title: "WebZaBiznis | Profesionalne web stranice za male biznise",
  description:
    "Jednostavna web stranica sa kontaktom i mapom, gotovo za 3 dana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bs">
      <body>{children}</body>
    </html>
  );
}
