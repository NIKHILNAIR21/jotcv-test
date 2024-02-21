import React from 'react'

const Certificate = ({certificate}) => {
  return (
    <div className='px-6'>
         <h1 className="font-semibold uppercase text-base mt-2 text-sky-400 ">
        Certification
      </h1>
      <div>
      <ul className="flex-wrap flex gap-x-3 underline">
              {certificate?.map((item, index) => (
                <li key={index}>{item?.certificate}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Certificate
