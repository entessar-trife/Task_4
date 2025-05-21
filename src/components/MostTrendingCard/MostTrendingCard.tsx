import "./MostTrendingCard.css"
import { IoLocationOutline } from "react-icons/io5";

interface MostTrendingCardProps {
  img: string;
  price: string;
  title: string;
  location: string
}

function MostTrendingCard({ img, price, title, location }: MostTrendingCardProps) {
  return (
    <div className="mostTrendingCard" data-aos="flip-right">
      <div className="imgContainer">
        <img src={img} alt="card image" />
      </div>
      <div className="cardInfo" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <span className="price"> {price} </span>
        <h4> {title} </h4>
      </div>
      <div className="location" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <IoLocationOutline />
        <span> {location} </span>
      </div>
    </div>
  )
}

export default MostTrendingCard