import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Float } from "@react-three/drei";

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 853});
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBg />
        <figure className="absolute inset-0" style={{width: "100vw", height: "100vh "}}>
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Float>
              <Astronaut scale={isMobile && 0.23} position={isMobile && [0, -1.5, 0]}/>
              <Rig />
            </Float>
          </Canvas>
        </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta);
  });
}
export default Hero;
