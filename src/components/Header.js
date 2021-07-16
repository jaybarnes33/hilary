import React from "react";

const Header = ({ title, icon, variant }) => {
  return (
    <header className={`bg-${variant}`}>
      <span className="title">{title}</span>
      <span className="icon ml-4">{icon}</span>
    </header>
  );
};

export default Header;
