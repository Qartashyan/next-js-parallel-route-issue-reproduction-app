export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('ROOTLAYOUT')
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
