import "./TitleComponent.css"

interface TitleComponentProps {
  title: string;
  desc: string;
  HeadingTag?: "h1" | "h2";
}
function TitleComponent({ title, desc, HeadingTag = "h2" }: TitleComponentProps) {
  return (
    <div className="titleComponent" data-aos="fade-right">
      <HeadingTag> {title} </HeadingTag>
      <p> {desc} </p>
    </div>
  )
}

export default TitleComponent