import React from 'react'

const Certificate = ({certificate}) => {
  return (
    <div className='px-4'>
         <h1 className="font-semibold uppercase text-base mt-4 text-red-400 ">
        Certification
      </h1>
      <div>
      <ul className="list-disc text-white flex flex-wrap gap-4 text-sm list-inside">
              {certificate?.map((item, index) => (
                <li key={index}>{item?.certificate}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Certificate
