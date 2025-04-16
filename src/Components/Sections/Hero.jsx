import { useRef } from 'react';
import { paragraphs, words } from '../../constants';
import Button from '../Button';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

// HeroRight component with two projects
const HeroRight = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    // Animate project containers
    const projects = gsap.utils.toArray('.project-item');
    
    gsap.fromTo(projects, 
      {
        scale: 0.8,
        opacity: 0,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
      }
    );

    // Create subtle floating animation
    projects.forEach((project) => {
      gsap.to(project, {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: "random(0, 2)"
      });
    });

    // Animate connection line
    gsap.fromTo(".connection-line", 
      {
        strokeDashoffset: 100,
        opacity: 0
      },
      {
        strokeDashoffset: 0,
        opacity: 0.7,
        duration: 1.5,
        delay: 0.8
      }
    );
  }, []);
  
  return (
    <div className="relative w-full h-full flex items-center justify-center px-4  ">
      <div ref={projectsRef}  className="relative w-full max-w-md h-full flex flex-col items-center justify-center">
        {/* First Project */}
        <div className="project-item absolute top-1/4 left-1/4 w-60 h-60 lg:w-96 lg:h-96 md:w-96 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <img src="/images/project1.png" alt="Project 1" className="w-full h-full object-contain" />
          <div className="absolute inset-0  transition-all flex items-center justify-center">
          </div>
        </div>
        
        {/* Second Project */}
        <div className="project-item absolute bottom-1/4 right-1/4 w-60 h-60 lg:w-96 lg:h-96 md:w-96 md:h-96 rounded-lg shadow-lg overflow-hidden">
          <img src="/images/project2.png" alt="Project 2" className="w-full h-full object-contain" />
          <div className="absolute inset-0  transition-all flex items-center justify-center">
          </div>
        </div>
        
        {/* Connected line to show relationship */}
        <svg className="absolute inset-0 w-full h-full" style={{zIndex: -1}}>
          <path 
            className="connection-line" 
            d="M160,170 C200,200 220,230 260,250" 
            stroke="#d1d5db" 
            strokeWidth="3" 
            strokeDasharray="8,8" 
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1" , 
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut"
            }
        );
        gsap.fromTo(".hero-para p" , 
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: "power2.inOut"
            }
        );
    });

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='hero-layout grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
                {/* Left: Hero Content*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1 className='text-black-50'>Shape 
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1 className='text-black-50'>into Real Project</h1>
                            <h1 className='text-black-50'>that Deliver Results</h1>
                        </div>
                        <div className="hero-para"> 
                            <p className='text-black-50 hero-para'>
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {paragraphs.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-3'>
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </p>
                        </div>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="LET'S TALK"
                        />
                    </div>
                </header>
                
                {/* Right: Visual Element with Two Projects */}
                <figure className="h-[90%] md:h-[90%] min-h-[400px] flex items-center justify-center">
                    <HeroRight />
                </figure>
            </div>
        </section>
    );
};

export default Hero;