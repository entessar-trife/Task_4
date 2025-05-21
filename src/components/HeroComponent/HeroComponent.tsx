import { HeroData } from '../../Data/HeroData';
import TitleComponent from '../TitleComponent/TitleComponent'
import './HeroComponent.css'

function HeroComponent() {
  return (
    <section className='hero'>
      <img
        src="/Task_4/images/hero/heroImage.png"
        className="heroImg"
        alt="hero image"
        data-aos="fade-left"/>
      <div data-aos="fade-right">
        <div className='px-162'>
          <TitleComponent
            HeadingTag="h1"
            title="Discover a place you will love to live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Imperdiet tempus felis vitae sit est quisque." />
        </div>
        <div className='heroInfo d-flex'>
          {HeroData.map((e) => (
            <div className='heroInfoComponent d-flex'>
              <img src={e.icon} alt="icon" />
              <div>
                <h3> {e.title} </h3>
                <span> {e.desc} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroComponent