import React from 'react'
import TitleHeader from '../TitleHeader'
import { testimonials } from '../../constants'
import GlowCard from '../GlowCard'

const Testimonials = () => {
  return (
    <div id='testimonials' className='flex-center section-padding bg-black'>
        {/* <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="What People Says About Me?"
            sub="Client Feedback Highlights" 
            />
        </div> */}
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16 '>
        {testimonials.map(({ name , mentions, review})=>(
           <GlowCard card={{review}}>
            <div className='flex items-center gap-3'>
                <div> 
                <p className='font-bold'>{name}</p>
                <p className='text-black-50'>{mentions}</p>
                </div>
            </div>
           </GlowCard>
        ))}
        </div>

    </div>
  )
}

export default Testimonials