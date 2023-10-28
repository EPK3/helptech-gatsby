import React, { useState, useEffect } from 'react'
import Button from './Button'

const HomeHero = ({ bgImage, bgImageMobile, title, subtitle, buttonProps, titleColor }) => {
    const [shouldRenderMobile, setShouldRenderMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
          if (typeof window !== 'undefined' && window.innerWidth > 1023) {
            setShouldRenderMobile(true)
          } else {
            setShouldRenderMobile(false)
          }
        }
    
        handleResize()
    
        window.addEventListener('resize', handleResize)
    
        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }, [])

  return (
    <section className={`w-full bg-top bg-cover xxxl:h-[82rem] xxl:h-[67.5rem] xl:h-[50.625rem] lg:h-[36rem] md:h-[109.625rem] sm:h-[73.728rem] h-[48rem]`}
    style={
        shouldRenderMobile
          ? { backgroundImage: `url(${bgImage})` }
          : { backgroundImage: `url(${bgImageMobile})` }
      }
      >
      <div className='w-full px-[2.5rem] sm:px-[2rem] md:px-[1.3rem] xxxl:pt-[20.42rem] xxxl:pl-[23.75rem] xxl:pt-[15.31rem] xxl:pl-[17.81rem] xl:pt-[11.48rem] xl:pl-[13.36rem] lg:pt-[8.17rem] lg:pl-[9.5rem] md:pt-[31.59rem] sm:pt-[22.49rem] pt-[14.62rem]'>
        <p 
        className={`${titleColor} font-heading font-bold leading-[112.2%] xxxl:w-[63.83331rem] xxxl:text-[6.66669rem] xxl:w-[47.875rem] xxl:text-[5rem] xl:w-[35.90625rem] xl:text-[3.75rem] lg:w-[25.53331rem] lg:text-[2.66669rem] w-full md:text-[6.75rem] sm:text-[4.8rem] text-[3.125rem]`}
        >
          {title}
        </p>
        <h1 
        className={`${titleColor} mt-5 font-body font-light lg:leading-[133.333%] xxxl:w-[53rem] xxxl:text-[2.5rem] xxl:w-[39.75rem] xxl:text-[1.875rem] xl:w-[29.8125rem] xl:text-[1.40625rem] lg:w-[21.2rem] lg:text-base w-full leading-[135.714%] md:text-[3.78rem] sm:text-[2.688rem] text-[1.75rem]`}
        >
          {subtitle}
        </h1>
        <div className='w-full flex justify-center lg:block'>
          <div 
          className='m-auto lg:m-0 xxxl:w-[30rem] xxl:w-[25rem] xl:w-[18.75rem] lg:w-[13.33331rem] md:w-[40.5rem] sm:w-[28.8rem] w-[18.75rem] mt-[1.31rem] sm:mt-[2rem] md:mt-[2.79rem] lg:mt-[.48rem] xl:mt-[.7rem] xxl:mt-[.94rem] xxxl:mt-[1.23rem]'
          >
              <Button {...buttonProps} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
