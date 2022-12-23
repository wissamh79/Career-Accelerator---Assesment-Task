import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />

      <Outlet />
    </section>
  );
};

export default Layout;
