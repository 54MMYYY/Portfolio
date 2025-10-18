import React from 'react'
import Card from '../components/Card';
import { useRef } from 'react';
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { FrameWorks } from '../components/FrameWorks';

const About = () => {
  const grid2Container = useRef();
  return <section className='c-space section-spacing'>
    <h2 className='text-heading'>About Me</h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* Grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
            <img src="assets/coding-pov.png" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] 
            md:left-50 md:inset-y-10 lg:scale-[2.5]' />
            <div className='z-10'>
                <p className='headtext'>Hi I'm Samson Shaji George</p>
                <p className='subtext'>
                Entry-level CS fresher with hands-on experience in ML, NLP, and Data Analysis through academic exposure & projects.
                </p>
            </div>
            <div className='absolute inset-x-0 pointer-events-none -bottom-1 h-1/2 sm:h-1/3 
            bg-gradient-to-t from-indigo' />
        </div>
        {/* Grid 2 */}
        <div className='grid-default-color grid-2' ref={grid2Container}>
            <div className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>
                    CODE IS CRAFT
                </p>  
                <Card style={{ rotate: "30deg", top: "30%", left: "20%"}} text="LLMs" containerRef={grid2Container}/>
                <Card style={{ rotate: "-30deg", top: "60%", left: "45%"}} text="Data Structures" containerRef={grid2Container}/>
                <Card style={{ rotate: "60deg", top: "30%", left: "70%"}} text="Containerization" containerRef={grid2Container}/>
                <Card style={{ rotate: "-45deg", top: "55%", left: "0%"}} text="Gen AI" containerRef={grid2Container}/>
                <Card style={{ rotate: "20deg", top: "10%", left: "30%"}} text="RAGs" containerRef={grid2Container}/>
                <Card style={{ rotate: "30deg", top: "70%", left: "70%"}} image="assets/logos/react.svg" containerRef={grid2Container}/>
                <Card style={{ rotate: "-45deg", top: "70%", left: "25%"}} image="assets/logos/cplusplus.svg" containerRef={grid2Container}/>
                <Card style={{ rotate: "30deg", top: "10%", left: "10%"}} image="assets/logos/git.svg" containerRef={grid2Container}/>
            </div>
        </div>
        {/* Grid 3 */}
        <div className='grid-black-color grid-3'>
            <div className='z-10 w-[50%]'>
                <p className='headtext font-bold'>Time Zone</p>
                <p className='subtext'>I'm based in UAE and open to work for on-site/hybrid/remote job roles in Dubai </p>
            </div>
            <figure className='absolute left-[30%] top-[10%]'>
                <Globe />
            </figure>
        </div>
        {/* Grid 4 */}
        <div className='grid-special-color grid-4'>
            <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>Do you want to start a project together?</p>
                <CopyEmailButton />
            </div>
        </div>
        {/* Grid 5 */}
        <div className='grid-default-color grid-5'>
            <div className='z-10 w-[50%]'>
                <p className='headtext font-bold'>Tech Stack</p>
                <p className='subtext'>I specialize in a variety of Languages, FrameWorks
                and Tools that allow me to build robust and scalable applications.</p>
            </div>
            <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                <FrameWorks />
            </div>
        </div>
    </div>
  </section>
};

export default About;
