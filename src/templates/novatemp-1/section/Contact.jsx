import React from 'react'

const Contact = ({email,phoneNo,City,socialLinks}) => {
  return (
    <div>
      <section className='flex bg-gray-200 font-semibold text-sm mt-1 p-1 text-emerald-500 justify-around items-center'>
        <h3 className='text-[12.5px]'>{email}</h3>
        <h3 className='text-[12.5px]'>{phoneNo}</h3>
        <h3 className='text-[12.5px]'>
        {City}
        </h3>
        <h3>{socialLinks?.map((links)=>(
            <a className='px-2 text-xs' href={links?.link} key={links.id}>{links?.name}</a>
        ))}</h3>
      </section>
    </div>
  )
}

export default Contact
