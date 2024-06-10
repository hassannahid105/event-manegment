import { Outlet } from "react-router-dom";
import NavBar from "../component/Header/Navbar/NavBar";
import Footer from "../component/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="fixed w-full z-50">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
