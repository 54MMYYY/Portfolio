import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBg />
    </section>
  );
};

export default Hero
