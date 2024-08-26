import { Ubuntu } from "next/font/google";
import "./globals.css";
import SideNav from "./Components/SideNav";
import Footer from "./Components/Footer";

const font = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Frontend Mentor | Multi-step form",
  description: "Frontend Mentor | Product list with cart using Next JS",
  icons: {
    icon: "/favicon.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          font.className +
          "min-h-screen  bg-Magnolia md:grid md:place-items-center"
        }
      >
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:items-center md:my-[104px] md:bg-White md:max-w[940px] md:p-4 md:rounded-2xl md:max-h-[600px] md:mx-auto">
          <div className="w-full flex-none md:w-[274px] h-[172px] md:h-[568px]">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto md:p-12">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
