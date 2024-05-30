import Footer from "@/components/core/Footer/Footer";
import ContactUs from "@/components/core/ContactUs";
import Navbar from "@/components/core/HeaderNavbar";


export default function MainGroupLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <ContactUs />
      <Footer />
    </>
  );
}
