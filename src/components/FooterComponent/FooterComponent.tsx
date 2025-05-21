import { Link } from "react-router-dom"
import { FooterData } from "../../Data/FooterData"
import "./FooterComponent.css"

interface FooterProps {
  img: string;
  desc: string
}

function FooterComponent({ img, desc }: FooterProps) {
  return (
    <footer className="px-162">
      <div className="footerContainer" data-aos="fade-up">
        <div className="leftPart">
          <img src={img} alt="logo" />
          <p> {desc} </p>
        </div>
        {FooterData.map((e) => (
          <div className="footerLinks">
            <h5> {e.title} </h5>
            {e.social ? (
              <div className="location">
                <p> {e.desc} </p>
                <div className="footerIcons">
                  {e.footerIcons?.map((icon) => (
                    <Link to="/"> {icon} </Link>
                  ))}
                </div>
              </div>
            ) : <ul>
              {e.links?.map((link) => (
                <li> <Link to="/"> {link} </Link> </li>
              ))}
            </ul>}
          </div>
        ))}
      </div>
      <div className="bottomPart d-flex" data-aos="fade-up">
        <span> Copyright 2024 flora. All Rights Reserved </span>
        <div>
          <Link to="/"> Terms & Conditions </Link>
          <Link to="/"> Privacy Policy </Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent