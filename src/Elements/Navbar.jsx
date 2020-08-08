import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menus: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ],
    };
  }
  render() {
    return (
      <nav>
        <ul>
          {this.state.menus.map((menu) => (
            <li className="navbar">
              <Link to={menu.path}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
