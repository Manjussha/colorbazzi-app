import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinks = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box one-page-scroll-menu">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </ScrollLink>
      </li>
      
     
      <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li>
     
       
      
    </ul>
  );
};

export default NavLinks;
