import React from "react";
import "./header.scss";
function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <a href="">
            <img
              src="Images/Header/instagram.png"
              alt=""
              className="header-image"
            />
          </a>

          <a href="">
            <img
              src="https://i.pravatar.cc/150?img=58"
              alt=""
              className="header-avatar"
            />
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
