import Footer from "@/components/core/Footer/Footer";
import Navbar from "@/components/core/HeaderNavbar";

export default function OtherMainGroupLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
