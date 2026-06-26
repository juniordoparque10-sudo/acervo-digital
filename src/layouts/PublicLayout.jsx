import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}