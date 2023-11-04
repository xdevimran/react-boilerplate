import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
