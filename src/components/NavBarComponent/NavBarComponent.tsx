import { NavLink } from "react-router-dom"
import "./NavBarComponent.css"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface NavLink {
  name: string;
  path: string
}

interface NavProps {
  img: string;
  links: NavLink[];
  btn: string
}


function NavBarComponent({ img, links, btn }: NavProps) {
  // state to manage menu
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // state to manage style of navbar on scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const handleNavScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true)
    }
    else {
      setIsScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => window.removeEventListener("scroll", handleNavScroll);
  }, [])

  return (
    <nav className={`px-162 d-flex ${isOpen ? "open" : ""}
    ${isScrolled ? "scrolled" : ""}`}>
      <img src={img} alt="logo" />
      <ul className="mainNav d-flex">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.path}> {link.name} </NavLink>
          </li>
        ))}
      </ul>
      <button> {btn} </button>

      {isOpen &&
        <div className="responsiveNav">
          <ul className="d-flex">
            {links.map((link, index) => (
              <li key={index} onClick={() => setIsOpen(!isOpen)}>
                <NavLink to={link.path}> {link.name} </NavLink>
              </li>
            ))}
          </ul>
          <button> {btn} </button>
        </div>
      }

      <FaBars
        className={`openNavBtn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <FaXmark
        className={`closeNavBtn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
    </nav>
  )
}

export default NavBarComponent