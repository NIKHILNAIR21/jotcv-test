import React from 'react'

const Certificate = ({certificate,reduxCertificate}) => {
  return (
    <div className='px-6'>
         <h1 className="font-semibold uppercase text-base mt-2 text-emerald-500 ">
        Certification
      </h1>
      <div>
      <ul className=" flex gap-x-3 flex-wrap">
              {reduxCertificate?.map((item, index) => (
                <li className=' text-xs' key={index}>{item?.name}</li>
              ))}
            </ul>
      <ul className=" flex gap-x-3 flex-wrap">
              {certificate?.map((item, index) => (
                <li className=' text-xs' key={index}>{item?.certificate}</li>
              ))}
            </ul>
      </div>
    </div>
  )
}

export default Certificate
