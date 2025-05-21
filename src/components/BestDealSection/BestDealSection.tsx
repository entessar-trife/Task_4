import { useState } from "react"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./BestDealSection.css"
import BestDealCard from "../BestDealCard/BestDealCard"
import { BestDealCardData, BestDealSectionFilters } from "../../Data/BestDealCardData"

function BestDealSection() {
  // state to manage active filter
  const [isActive, setIsActive] = useState<string>(BestDealSectionFilters[0])

  // display cards based on the active filter (isActive).
  const filteredCards = isActive === "Residential Property" ?
    BestDealCardData :
    BestDealCardData.filter(card => card.title === isActive)

  return (
    <section className="bestDealSection pb-120">
      <div className="px-162">
        <TitleComponent
          title="Best Real Estate Deals"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
      </div>
      <div className="bestDealSectionFilterContainer px-162" data-aos="fade-right">
        <ul className="bestDealSectionFilter">
          {BestDealSectionFilters.map((filter, index) => (
            <li key={index}
              className={isActive == filter ? "active" : ""}
              onClick={() => setIsActive(filter)}>
              {filter}
            </li>
          ))}
        </ul>
      </div>
      <div className="BestCards d-flex px-162">
        {filteredCards.map((card, index) => (
          <BestDealCard key={index} img={card.img} />
        ))}
      </div>
    </section>
  )
}

export default BestDealSection