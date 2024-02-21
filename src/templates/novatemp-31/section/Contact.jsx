import React from 'react'

const Contact = ({email,phoneNo,City,socialLinks}) => {
  return (
    <div>
      <section className='flex flex-col px-2 mt-3 font-semibold  text-sm text-gray-700 justify-around items-start'>
        <h3 >{email}</h3>
        <h3>{phoneNo}</h3>
        <h3>
        {City}
        </h3>
        <h3 className='flex flex-col text-left'>{socialLinks?.map((links)=>(
            <a className='' href={links?.link} key={links.id}>{links?.name}</a>
        ))}</h3>
      </section>
    </div>
  )
}

export default Contact
