import React from 'react'

const Contact = ({email,phoneNo,City,socialLinks}) => {
  return (
    <div>
      <section className='flex flex-col  font-semibold text-right text-sm mt-2.5  justify-around items-end'>
        <h3 className=''>{email}</h3>
        <h3>{phoneNo}</h3>
        <h3>
        {City}
        </h3>
        <h3 className='flex flex-col text-right'>{socialLinks?.map((links)=>(
            <a className='px-2' href={links?.link} key={links.id}>{links?.name}</a>
        ))}</h3>
      </section>
    </div>
  )
}

export default Contact
