import "./BestDealCard.css"

interface BestDealCardProps {
  img: string
}

function BestDealCard({ img }: BestDealCardProps) {
  return (
    <div className="bestDealCardComponent" data-aos="flip-right">
      <img src={img} alt="card image" />
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <span> Featured </span>
        <span> 3D </span>
      </div>
    </div>
  )
}

export default BestDealCard