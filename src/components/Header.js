import React from "react";

function Header({ onDarkModeClick, color }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>{color} Mode</button>
    </header>
  );
}

export default Header;
