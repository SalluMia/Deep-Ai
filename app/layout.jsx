import Provider from "@/components/providers/provider";
import "./globals.css";
import localFont from "@next/font/local";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const varino = localFont({
  src: [
    {
      path: "../public/fonts/Varino - Normal.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Varino - Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-varino",
});

const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/MonaSans - Normal.ttf",
      weight: "400",
    },
  ],
  variable: "--font-monosans",
});

export const metadata = {
  title: "Deep Ai",
  description:
    "Join our world Where Gen AI, Web 3.0, Blockchain, Serverless Cloud meet Modern Full-Stack Applications and SAAS Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${varino.variable} ${monaSans.variable}  bg-[#111424]`}>
        {/* <Navbar /> */}
        <ReactQueryProvider>
          <Provider>{children}</Provider>
        </ReactQueryProvider>

        {/* <ContactUs/>
        <Footer/> */}
      </body>
    </html>
  );
}
