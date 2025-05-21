import { useEffect } from 'react'
import './App.css'
import FooterComponent from './components/FooterComponent/FooterComponent'
import DreamHomeSection from './components/DreamHomeSection/DreamHomeSection'
import HeroComponent from './components/HeroComponent/HeroComponent'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection'
import MostTrendingSection from './components/MostTrendingSection/MostTrendingSection'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import { NavData } from './Data/NavData'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ScrollToTopComponent from './components/ScrollToTopComponent/ScrollToTopComponent'
// import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import BestDealSection from './components/BestDealSection/BestDealSection'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 0,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <body>
      {/* <HandleLoadingComponent /> */}
      <ScrollToTopComponent />
      <header>
        <NavBarComponent img="/Task_4/images/logo.png" links={NavData} btn="Login" />
        <HeroComponent />
      </header>
      <main>
        <HowItWorksSection />
        <DreamHomeSection />
        <MostTrendingSection />
        <BestDealSection />
      </main>
      <FooterComponent img="/Task_4/images/logo.png" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque." />
    </body>
  )
}

export default App
