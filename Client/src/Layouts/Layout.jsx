import Navbar from "../Components/Navbar";
import Footer from "../Sections/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navbar />
      <div >
        <Outlet />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <Footer id='contact' />
      </div>
    </>
  );
}
