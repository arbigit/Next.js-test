import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          <title>The Next Chapter</title>
          <meta name="description" content="Next Chapter Vercel Application"/>

          {'<!-- Facebook Meta Tags -->'}
          <meta property="og:url" content="https://the-next-chapter-website.vercel.app/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="The Next Chapter"/>
          <meta property="og:description" content="Next Chapter Vercel Application"/>
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/9b3b12b8-c93d-4665-af09-6e6876e3a5a8.png?token=8-y2ABRQ35wA-7ahKWy2NedYJsHS_kztbvGfMpBNUgA&height=630&width=1200&expires=33267546542"/>

          {'<!-- Twitter Meta Tags -->'}
          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="the-next-chapter-website.vercel.app"/>
          <meta property="twitter:url" content="https://the-next-chapter-website.vercel.app/"/>
          <meta name="twitter:title" content="The Next Chapter"/>
          <meta name="twitter:description" content="Next Chapter Vercel Application"/>
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/9b3b12b8-c93d-4665-af09-6e6876e3a5a8.png?token=8-y2ABRQ35wA-7ahKWy2NedYJsHS_kztbvGfMpBNUgA&height=630&width=1200&expires=33267546542"/>
        </head>
      <body>{children}</body>
    </html>
  );
}
