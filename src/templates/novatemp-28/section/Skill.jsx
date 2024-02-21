import React from 'react'
import Header from './Header'

const Skill = ({skills}) => {
  return (
    <div className='px-6'>
       <h1 className='font-semibold uppercase text-base mt-3 text-sky-400 '>Skills</h1>
       <div className='flex gap-x-2.5 flex-warp mt-2.5 '>
        
        {skills?.map((item, index)=>(
            <p className="text-sm  font-semibold  w-fit " key={index}>
                  {item.skill} 
                </p>
        ))}
       </div>
    </div>
  )
}

export default Skill
