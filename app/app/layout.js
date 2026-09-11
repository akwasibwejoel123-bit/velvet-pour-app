export const metadata = {
  title: "Velvet Pour",
  description: "Premium cocktails delivered to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
