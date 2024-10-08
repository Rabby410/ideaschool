import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Idea-School",
  description: "A School Tamplate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Footer/>
      </body>
    </html>
  );
}
