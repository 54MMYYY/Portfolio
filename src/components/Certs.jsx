import React, { useState }from 'react'
import CertsDetails from './CertsDetails'
import { AnimatePresence } from 'framer-motion'

const Certs = ({title, description, subDescription, href, image, tags, setPreview}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
  <>
  <div className='flex-wrap items-center justify-between py-10
  space-y-14 sm:flex sm:space-y-0'
  onMouseEnter={() => setPreview(image)}
  onMouseLeave={() => setPreview(null)}>
    <div>
        <p className='text-2xl'>{title}</p>
        <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
            ))}
        </div>
    </div>
    <button onClick={()=>setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
        Read More
        <img src={import.meta.env.BASE_URL + 'assets/arrow-right.svg'} className='w-5'/>
    </button>
  </div>
  <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent
  h-[1px] w-full'/>
  <AnimatePresence>
  {isHidden && (<CertsDetails 
  title={title} 
  description={description}
  subDescription={subDescription}
  image={image}
  tags={tags}
  href={href}
  closeModel={()=>setIsHidden(false)} />)}
  </AnimatePresence>
  </>
  )
}

export default Certs
