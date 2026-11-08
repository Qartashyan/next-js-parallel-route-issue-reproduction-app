export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('ROOTLAYOUT', crypto.randomUUID());
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}