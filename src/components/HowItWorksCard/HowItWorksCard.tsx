import "./HowItWorksCard.css"

interface HowItWorksCardProps {
  icon: string;
  hoveredIcon: string;
  title: string;
  desc: string;
  activeCard: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function HowItWorksCard({
  icon, hoveredIcon, title, desc, activeCard, onMouseEnter, onMouseLeave }: HowItWorksCardProps) {
  return (
    <div className={`howItWorksCard ${activeCard ? "blue-card" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <img src={activeCard ? hoveredIcon : icon} alt="card icon" />
      <h3> {title} </h3>
      <p> {desc} </p>
    </div>
  )
}

export default HowItWorksCard