import React from "react";
import Navbar from "../Elements/Navbar";

export default function Header() {
  return (
    <div>
      <header>
        <img
          id="logo"
          src={require("../Pages/public/img/logo.png")}
          width="200px"
          alt="Logo"
        />
        <Navbar />
      </header>
    </div>
  );
}
