import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBg />
        <figure className="absolute inset-0" style={{width: "100vw", height: "100vh "}}>
          <Canvas>
            <Astronaut />
            <OrbitControls />
          </Canvas>
        </figure>
    </section>
  );
};

export default Hero
