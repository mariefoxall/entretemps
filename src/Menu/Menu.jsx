import { useState, useRef } from "react";
import "./Menu.css";
import burger from "../assets/burger.svg";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  }

  function handleBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  }

  return (
    <div className="nav-menu" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <button
        ref={buttonRef}
        className="burger-border"
        aria-label="Navigation menu"
        aria-expanded={isOpen}
        aria-controls="main-nav-links"
        onClick={toggle}
      >
        <img src={burger} className="burger" alt="" aria-hidden="true" />
      </button>
      <nav
        id="main-nav-links"
        className={`nav-menu-links${isOpen ? " nav-menu-links--open" : ""}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div
          className="nav-menu-links__container"
          inert={!isOpen ? "" : undefined}
        >
          <a href="/exhibitions">expositions/exhibitions</a>
          <a href="/contact">contact</a>
          <a href="/visit">visit(e)</a>
          <a href="http://wastedeffort.myshopify.com">shop</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
