import React from 'react'
import Header from './Header'

const Skill = ({apiskills,skills}) => {
  console.log(skills);
  return (
    <div className='px-6'>
       <h1 className='font-semibold uppercase text-base mt-3 text-gray-700 '>Skills</h1>
       <div className='flex gap-x-2.5 flex-warp mt-1 '>
        
        {apiskills?.map((item, index)=>(
            <p className="text-sm  text-gray-700 font-semibold  w-fit " key={index}>
                  {item.skill} 
                </p>
        ))}
        {skills?.map((item, index)=>(
            <p className="text-sm  text-gray-700 font-semibold  w-fit " key={index}>
                  {item?.name} 
                </p>
        ))}
       </div>
    </div>
  )
}

export default Skill
