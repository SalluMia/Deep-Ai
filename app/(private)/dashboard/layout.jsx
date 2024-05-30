import DahboardNav from "@/components/dashboard/DahboardNav";
import Sidebar from "@/components/dashboard/Sidebar";
import { Toaster } from "react-hot-toast";
import BackgroundGradients from "@/components/core/Gradients/BackgroundGradients";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-5">
          <DahboardNav />
          <BackgroundGradients />
          {children}
        </main>
      </div>
    </>
  );
}
