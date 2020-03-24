import React, { useState } from "react";

const NavBar = () => {
  const [navLinkOpen, navLinkToggle] = useState(false);

  const handleClick = () => {
    navLinkToggle(!navLinkOpen);
  };

  const renderNavClasses = () => {
    let classes = "nav-links";
    if (!navLinkOpen) {
      classes += " hide";
    }
    return classes;
  };

  return (
    <nav>
      <a href="" className="logo">
        Brand-Logo
      </a>
      <button onClick={handleClick} className="hamburger-toggle">
        <i class="fas fa-bars fa-lg"></i>
      </button>

      <div className={renderNavClasses()}>
        <a href="" className="link">
          home
        </a>
        <a href="" className="link">
          about us
        </a>
        <a href="" className="link">
          {" "}
          contact us
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
