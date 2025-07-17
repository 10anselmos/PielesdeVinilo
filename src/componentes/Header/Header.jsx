import React, { useState } from "react";
import "../Header/Header.css";

const NavLinkItem = ({ href, children, className = "" }) => (
  <li className={`barra ${className}`}>
    <a href={href}>{children}</a>
  </li>
);

const DropdownMenu = () => (
  <li className="dropdawntiposdevinilo">
    <button className="tipobtn">Tipo de Vinilo</button>
    <ul className="tiposdevinilo">
      <NavLinkItem href="#tiposdevinilos" className="b2">
        Vinilos
      </NavLinkItem>
      <NavLinkItem href="#galeriadevideo" className="b3">
        Personalizado
      </NavLinkItem>
      <NavLinkItem href="#comovestir" className="b5">
        Cómo vestirlo
      </NavLinkItem>
      <NavLinkItem href="#modelosytalles" className="b11">
        Modelos
      </NavLinkItem>
      <NavLinkItem href="#ConfiguradorVinilos" className="b10">
        Arma tu Vinilo
      </NavLinkItem>
    </ul>
  </li>
);

const Navigation = ({ isVisible, onClose }) => (
  <nav className={`nav ${isVisible ? "visible" : ""}`} id="nav">
    <button className="cerrar-menu" id="cerrar" onClick={onClose}>
      <img src="/imagenes/Iconos/close.png" width="50px" alt="cerrar-menu" />
    </button>
    <ul className="flex-container">
      <NavLinkItem href="mailto:ysfiorucci@gmail.com" className="b8">
        Email
      </NavLinkItem>

      <NavLinkItem href="index.html" className="b1">
        Inicio
      </NavLinkItem>

      <li className="barra b9">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/pielesdeviniloof/"
        >
          Trabajos
        </a>
      </li>

      <DropdownMenu />
    </ul>
  </nav>
);

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="header">
      <img
        src="/imagenes/pielesdevinilostk.png"
        alt="Pieles de vinilo"
        className="pielsticker"
      />

      {!menuVisible && (
        <button id="abrir" className="abrir-menu" onClick={toggleMenu}>
          <img
            src="/imagenes/Iconos/burguer.png"
            width="50px"
            alt="abrir-menu"
          />
        </button>
      )}

      <Navigation isVisible={menuVisible} onClose={closeMenu} />
    </header>
  );
};

export default Header;
