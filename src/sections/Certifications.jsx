import Certs from "../components/Certs"
import { myCertifications } from "../constants"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useState } from 'react'

export const Certifications = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  }
  const [preview, setPreview] = useState(null);
  return <section id="certifications" className="relative c-space" onMouseMove={handleMouseMove}>
    <h2 className="text-heading">My Certifications</h2>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 
    to-transparent mt-12 h-[1px] w-full"/>
    {myCertifications.map((cert) => (
        <Certs key={cert.id} {...cert} setPreview={setPreview}/>
    ))}
    {preview && (<motion.img src={import.meta.env.BASE_URL + preview}
    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
    style={{x: springX, y: springY}}/>
    )}
  </section>
}

export default Certifications
