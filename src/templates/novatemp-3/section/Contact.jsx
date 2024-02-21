import React from 'react'

const Contact = ({email,phoneNo,City,socialLinks}) => {
  return (
    <div>
      <section className='flex bg-gray-700 p-1 font-semibold text-sm mt-1 text-white justify-around items-center'>
        <h3>{email}</h3>
        <h3>{phoneNo}</h3>
        <h3>
        {City}
        </h3>
        <h3>{socialLinks?.map((links)=>(
            <a className='px-2' href={links?.link} key={links.id}>{links?.name}</a>
        ))}</h3>
      </section>
    </div>
  )
}

export default Contact
