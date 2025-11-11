import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import WhatsappContact from "./WhatsappContact";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        className=" fixed z-100 lg:bottom-[5vh] lg:right-[10vh]
       bottom-[2vh] right-[1vh] "
      >
        <WhatsappContact />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
