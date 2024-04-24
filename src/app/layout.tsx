import type { Metadata } from "next";
import "@/comp/style/common.scss";
import Header from "@/comp/UIUX/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://memorit-jiyeon.vercel.app/'),
  title: "Memo-Rit 메모릿",
  description: "Memo & To do List",
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
