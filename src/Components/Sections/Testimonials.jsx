import React, { useRef } from 'react'
import TitleHeader from '../TitleHeader'
import { testimonials } from '../../constants'
import GlowCard from '../GlowCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    // Animate the title and subtitle
    gsap.fromTo(
      '.testimonial-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      }
    )

    // Animate the cards with stagger effect
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        }
      }
    )

    // Add hover animations to cards
    cardsRef.current.forEach(card => {
      const timeline = gsap.timeline({ paused: true })
      
      timeline.to(card, {
        y: -15,
        scale: 1.03,
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
        duration: 0.3,
        ease: 'power2.out'
      })
      
      card.addEventListener('mouseenter', () => timeline.play())
      card.addEventListener('mouseleave', () => timeline.reverse())
    })

  }, [])

  return (
    <div id='testimonials' className='bg-black py-16' ref={sectionRef}>
        <div className='w-full h-full md:px-10 px-5'>
            <div className='testimonial-title'>
              <TitleHeader 
                title="Happy Clients"
                sub="Custom web apps. User experience design. Engagement intelligence. Native cross-platform."
              />
            </div>
        </div>
        <div className='lg:columns-3 md:columns-2 columns-1 mt-16 md:px-10 px-5 gap-6'>
        {testimonials.map(({ name, mentions, review}, index) => (
           <div 
             key={index} 
             className='mb-6 break-inside-avoid'
             ref={el => cardsRef.current[index] = el}
           >
             <GlowCard card={{review}}>
              <div className='flex items-center gap-3'>
                <div> 
                  <p className='font-bold'>{name}</p>
                  <p className='text-white-50'>{mentions}</p>
                </div>
              </div>
             </GlowCard>
           </div>
        ))}
        </div>
    </div>
  )
}

export default Testimonials