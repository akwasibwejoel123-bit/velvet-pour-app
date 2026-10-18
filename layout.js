
import "./globals.css";

export const metadata = {
  title: "Velvet Pour",
  description: "Premium cocktails and delivery in Kampala.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
