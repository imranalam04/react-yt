import HeroContent from "./HeroContent";
import Arrow from "./Arrow";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
         <HeroContent />
         <Arrow />
    </div>
  )
}

export default LeftContent