import { MostTrendingCardData } from "../../Data/MostTrendingCardData"
import MostTrendingCard from "../MostTrendingCard/MostTrendingCard"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./MostTrendingSection.css"

function MostTrendingSection() {
  return (
    <section className="px-162 pb-120">
      <TitleComponent
        title="Most Trending"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
      <div className="mostTrendingCards">
        {MostTrendingCardData.map((card, index) => (
          <MostTrendingCard
            key={index}
            img={card.img}
            price={card.price}
            title={card.title}
            location={card.location}
          />
        ))}
      </div>
    </section>
  )
}

export default MostTrendingSection