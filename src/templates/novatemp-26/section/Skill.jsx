import React from 'react'
import Header from './Header'

const Skill = ({skills}) => {
  return (
    <div className='px-6'>
       <h1 className='font-semibold uppercase text-base mt-2 text-red-700 '>Skills</h1>
       <div className='flex gap-x-2.5 flex-warp mt-1.5 '>
        
        {skills?.map((item, index)=>(
            <p className="text-sm rounded-md text-white font-semibold p-1 w-fit bg-red-700" key={index}>
                  {item.skill} 
                </p>
        ))}
       </div>
    </div>
  )
}

export default Skill
