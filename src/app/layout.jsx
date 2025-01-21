import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

// Configure fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Soulsadhna - India's First Sadhna Building Program",
  description:
    "Transform your life with Soulsadhna's habit building program. Unlock your full potential through personalized spiritual and self-development practices. Designed to guide individuals in building lasting positive habits, Soulsadhna offers a comprehensive approach to mental clarity, emotional balance, and overall well-being. Join us on a transformative journey to cultivate discipline, self-awareness, and inner peace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} font-body flex flex-col min-h-screen`}
      >
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
