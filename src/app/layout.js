import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "TKACH PRO",
  description: "Home page",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <body className="body bg-dark text-base flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
