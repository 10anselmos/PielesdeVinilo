import React, { useState } from "react";
import "../Footer/Footer.css";

import whatsappIcon from "/imagenes/Iconos/whatsapp.png";
import facebookIcon from "/imagenes/Iconos/facebook.png";
import instagramIcon from "/imagenes/Iconos/instagram.png";

const FooterNavLinkItem = ({ href, children, className = "" }) => (
  <li className={`barra ${className}`}>
    <a href={href}>{children}</a>
  </li>
);

const SocialLink = ({ href, imgSrc, altText }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={imgSrc} width="30" height="30" alt={altText} />
  </a>
);

const FooterDropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="dropdawntiposdevinilo">
      <button className="tipobtn" onClick={toggleDropdown}>
        Tipo de Vinilo
      </button>
      {isDropdownOpen && (
        <ul className="tiposdevinilo">
          <FooterNavLinkItem href="#tiposdevinilos" className="b2">
            Vinilos
          </FooterNavLinkItem>
          <FooterNavLinkItem href="#galeriadevideo" className="b3">
            Personalizado
          </FooterNavLinkItem>
          <FooterNavLinkItem href="#comovestir" className="b5">
            Como vestirlo
          </FooterNavLinkItem>
          <FooterNavLinkItem href="#modelosytalles" className="b11">
            Modelos
          </FooterNavLinkItem>
        </ul>
      )}
    </li>
  );
};

const Footer = () => {
  const handleLinkClick = () => {};

  return (
    <footer className="footer">
      <div className="columnas320">
        <nav className="nav1">
          <ul className="flex-container">
            <FooterNavLinkItem
              href="mailto:ysfiorucci@gmail.com"
              className="b8"
            >
              Email
            </FooterNavLinkItem>
            <FooterNavLinkItem href="index.html" className="b1">
              Inicio
            </FooterNavLinkItem>
            <li className="barra b9">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/pielesdeviniloof/"
              >
                Trabajos
              </a>
            </li>
            <FooterNavLinkItem href="./pages/contacto.html" className="b10">
              Contacto
            </FooterNavLinkItem>
            <FooterDropdownMenu />
          </ul>
        </nav>
        <br />
        <div className="linkspngs">
          <SocialLink
            href="https://wa.me/5493364579473/?text=contacta con Pieles de Vinilo"
            imgSrc={whatsappIcon}
            altText="WhatsApp"
            onClick={handleLinkClick}
          />
          <SocialLink
            href="https://www.facebook.com/pielesdeviniloof/"
            imgSrc={facebookIcon}
            altText="Facebook"
            onClick={handleLinkClick}
          />
          <SocialLink
            href="https://www.instagram.com/pielesdeviniloof/"
            imgSrc={instagramIcon}
            altText="Instagram"
            onClick={handleLinkClick}
          />
        </div>
      </div>
      <div className="divpfooter">
        <p>Página realizada por 10anselmos</p>
        <p>&copy;2025</p>
      </div>
    </footer>
  );
};

export default Footer;
