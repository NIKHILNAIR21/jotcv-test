import React from 'react'

const Certificate = ({certificate}) => {
  return (
    <div className='px-6'>
         <h1 className="font-semibold uppercase text-base mt-2 text-red-700 ">
        Certification
      </h1>
      <div>
      <ul className=" flex gap-x-3 flex-wrap">
              {certificate?.map((item, index) => (
                <li className='underline text-sm' key={index}>{item?.certificate}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Certificate
