import React from "react";
import Images from "./images/notes.png"

function Header() {
  return (
    <>
    <div className="header">
    <img className="logo" src={Images} alt="logo" />
    <h1>Keep Notes</h1>
    </div>
    </>
  );
}

export default Header;
