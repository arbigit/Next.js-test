import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <title>The Next Chapter 1-YEAR CONTAINER</title>
        <meta name="description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <link rel="canonical" href="https://the-next-chapter-website.vercel.app/" />
        
        <meta property="og:title" content="The Next Chapter 1-YEAR CONTAINER" />
        <meta property="og:description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <meta property="og:image" content="https://emotionalsobrietycoaching.com/Opengraph.png" />
        <meta property="og:url" content="https://the-next-chapter-website.vercel.app/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Next Chapter 1-YEAR CONTAINER" />
        
        <meta name="twitter:description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <meta name="twitter:image" content="https://emotionalsobrietycoaching.com/Opengraph.png" />
        
        <meta name="apple-mobile-web-app-title" content="The Next Chapter 1-YEAR CONTAINER" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
