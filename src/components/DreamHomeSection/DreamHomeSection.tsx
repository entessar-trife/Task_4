import TitleComponent from "../TitleComponent/TitleComponent"
import "./DreamHomeSection.css"

function DreamHomeSection() {
  return (
    <section className="dreamHomeSection pb-120">
      <div className="contentContainer">
        <picture>
          <source media="(max-width: 992px)" srcSet="/Task_4/images/dreamHome-desktop.png" />
          <source media="(min-width: 993px)" srcSet="/Task_4/images/dreamHome-mobile.png" />
          <img src="/Task_4/images/dreamHome-desktop.png" alt="Dream Home image" />
        </picture>
        <div className="dreamHomeTitle">
          <TitleComponent
            title="Find Dream Home"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
          />
        </div>
        <div className="blackLayer"></div>
      </div>
    </section>
  )
}

export default DreamHomeSection