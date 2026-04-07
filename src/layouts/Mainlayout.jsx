import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";



function Mainlayout() {
  return (
    <>
    <Header2 />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default Mainlayout;