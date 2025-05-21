import { useEffect, useState } from "react";
import "./ScrollToTopComponent.css"
import { IoMdArrowUp } from "react-icons/io";

function ScrollToTopComponent() {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState<boolean>(false)

  // Show the button if the scroll position is greater than 500px, otherwise hide it
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <button
      className={`scrollBtn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}>
      <IoMdArrowUp />
    </button>
  )
}

export default ScrollToTopComponent