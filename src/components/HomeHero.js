import React, { useState, useEffect } from 'react'
import Button from './Button'

const HomeHero = ( bgImage, bgImageMobile, title, subtitle, buttonProps ) => {
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
    <header className={`w-full bg-center bg-cover xxxl:h-[90rem] xxl:h-[67.5rem] xl:h-[50.625rem] lg:h-[36rem] h-screen`}
    style={
        shouldRenderMobile
          ? { backgroundImage: `url(${bgImage})` }
          : { backgroundImage: `url(${bgImageMobile})` }
      }
      >
        <p className={`${titleColor} font-heading font-bold leading-[112.2%] xxxl:w-[63.83331rem] xxxl:text-[6.66669rem] xxl:w-[47.875rem] xxl:text-[5rem] xl:w-[35.90625rem] xl:text-[3.75rem] lg:w-[25.53331rem] lg:text-[2.66669rem]`}>{title}</p>
        <h1>{subtitle}</h1>
        <div>
            <Button {...buttonProps} />
        </div>
    </header>
  )
}

export default HomeHero
