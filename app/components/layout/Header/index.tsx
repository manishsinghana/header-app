"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import { NavMenu } from "./NavMenu";
import { MenuItem } from "./MenuItem";
import HeaderSearch from "./HeaderSearch";

import { useClickOutside } from "./useClickOutside";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const [isSearchExpended, setIsSearchExpended] = useState(false);

  const mainNavRef = useRef();

  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleClose = () => {
    setIsMobileNavOpen(false);
  };

  // Hide Mobile Sidebar on click outside of navigation
  useClickOutside(mainNavRef, () => setIsMobileNavOpen(false));

  return (
    <header className={`header ${isMobileNavOpen ? "mobile-menu--open" : ""}`}>
      <div className="header-container">
        <Link className="brand-logo" href="/">
          <Image
            src="/assets/images/dummy-logo.png"
            alt="brand logo"
            fill="cover"
          />
        </Link>

        <div className="header-right">
          <nav className="main-navigation" ref={mainNavRef}>
            <NavMenu className="nav-menu">
              <MenuItem label="Home" href="/" active />
              <MenuItem label="Gallery" href="/gallery" />
              <MenuItem label="Contact us" href="/contact" />
              <MenuItem label="About us" href="/about" />
              <MenuItem label="Faqs" href="/faqs" />
            </NavMenu>
          </nav>
          <div
          
          className={`header-search-con ${isSearchExpended ? "search-expended" : ""}`}
          >
            <HeaderSearch />
            <span className="search-toggle" onClick={() => setIsSearchExpended(!isSearchExpended)}>
                {
                    isSearchExpended

                    ?
                    <Image src="/assets/images/ic-close.png" width={20} height={20} alt="close icon"/>

                    :

                    <Image src="/assets/images/ic-search.png" width={20} height={20} alt="search icon"/>
                }
                
            </span>
            
          </div>
          
          <div className="mobile-nav-toggle" onClick={handleClick}>
            <Image
              src="/assets/images/hamburger.svg"
              alt="hamburger ICon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
