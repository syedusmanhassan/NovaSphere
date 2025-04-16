import React from 'react'

const TitleHeader = ({title,sub}) => {
  return (
    <div className='flex flex-col gap-5'>
       
        <div className='font-semibold md:text-5xl text-3xl text-center mt-3'>
        {title}
      </div>
      <div className='text-center'>
            <p>{sub}</p>
        </div>
    </div>
  )
}

export default TitleHeader