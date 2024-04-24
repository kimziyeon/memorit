import type { Metadata } from "next";
import "@/comp/style/common.scss";
import Header from "@/comp/UIUX/Header";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL('https://memorit-jiyeon.vercel.app/'),
  title: "Memo-Rit",
  description: "Memo & To do List - 메모릿",
  openGraph: {
    title: 'Memo-Rit',
    description: 'Memo & To do List - 메모릿',
    images: '/memorit.png'
  },
  twitter: {
    title: 'Memo-Rit',
    description: 'Memo & To do List - 메모릿',
    images: '/memorit.png'
  },
  icons: {
    icon: '/favicon-16x16.png',
    apple: '/favicon-16x16.png',
    shortcut: '/memorit.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon-32x32.png',
    }
  },
  keywords: ['memorit', '메모릿', 'next', '메모','투두리스트'],
  authors: [{ name: '김지연' }],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <main>
          <div className="root">
            <Header />
            {children}
            {/* <Footer/> */}
          </div>
        </main>
      </body>
    </html>
  );
}
