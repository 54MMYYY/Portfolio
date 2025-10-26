import { motion } from 'motion/react'

const ProjectDetails = ({title, description, subDescription, image, tags, href, closeModel}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center
    justify-center overflow-x-hidden overflow-y-auto backdrop-blur-sm'>
      <motion.div className='relative max-w-2xl border-shadow-sm rounded-2xl bg-gradient-to-l
      from-midnight to-navy border-white/10'
      initial={{ opacity: 0, scale: 0.5}}
      animate={{ opacity: 1, scale: 1}}
      exit={{ opacity: 0, scale: 0.5}}>
        <button onClick={closeModel} className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
            <img src={import.meta.env.BASE_URL + "assets/close.svg"} className='w-6 h-6'/>
        </button>
        <img src={import.meta.env.BASE_URL + image} alt={title} className='w-full rounded-t-2xl'/>
        <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
            <p className='mb-3 font-normal text-neutral-400'>{description}</p>
            {subDescription.map((subDesc, index) => (
                <p className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
            ))}
            <div className='flex items-center justify-between mt-4'>
                <div className='flex gap-3'>
                    {tags.map((tag) => (
                        <img key={tag.id} src={import.meta.env.BASE_URL + tag.path} alt={tag.name} className='rounded-lg size-10 hover-animation'/>
                    ))}
                </div>
                <a className='inline-flex items-center gap-1 font-medium hover-animation cursor-pointer'>
                    View Project<img src={import.meta.env.BASE_URL + "assets/arrow-up.svg"} className='size-4' href={href}/>
                </a>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
