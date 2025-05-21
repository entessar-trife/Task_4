import { useState } from "react"
import { HowItWorksCardData } from "../../Data/HowItWorksCardData"
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./HowItWorksSection.css"

function HowItWorksSection() {
  // State to manage hover effect 
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="howItWorksSection px-162 pb-120 ">
      <TitleComponent
        title="How it works"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />
      <div className="howItWorksCards"
        data-aos="flip-right">
        {HowItWorksCardData.map((card, index) => {
          const blueCard =
            hoveredIndex === null ?
              index === 1 :
              hoveredIndex === index
          return (
            <HowItWorksCard
              key={index}
              icon={card.icon}
              hoveredIcon={card.hoveredIcon}
              title={card.title}
              desc={card.desc}
              activeCard={blueCard}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />)
        }
        )}
      </div>
    </section>
  )
}

export default HowItWorksSection