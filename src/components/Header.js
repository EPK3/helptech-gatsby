import React from 'react'
import Button from './Button'

const Header = ({ logo, logoAltText, menuData, requestButtonProps, callButtonProps, textColor, borderColor, icon, menuLabel }) => {
  return (
    <header className='w-full bg-transparent absolute top-0 left-0'>
      <div className='hidden lg:flex lg:justify-between w-full'>
        <a href='/' className='xxl:mt-[2rem] xxl:ml-16 xl:mt-6 xl:ml-12 lg:ml-8 lg:mt-4'>
          <img src={logo.src} srcSet={logo.srcSet} alt={logoAltText} className='xxxl:w-[31rem] xxl:w-[23.25rem] xl:w-[17.4375rem] lg:w-[12.4rem]' />
        </a>
        <nav className='xxl:mt-[3.87rem] xl:mt-12 lg:mt-8'>
          {menuData.map(data => {
            return (
              <span key={data} className={`${textColor} font-medium hover:border-b-2 ${borderColor} text-[0.8rem] xl:text-[1.125rem] xxl:text-2xl xxxl:text-[2rem] cursor-pointer xxxl:mx-6 xxxl:px-2 lg:pb-1 xl:mx-4 lg:px-1 lg:mx-2 ${data.label === 'Home' && 'border-b-2'}`}>  
                {data.subMenu ? 
                  <p>
                    {data.label}
                  </p>
                  :
                  <a href={data.link}>
                    {data.label}
                  </a>
                }
              </span>
            )
          })}
        </nav>
        <div className='flex xxl:pr-16 xl:pr-12 lg:pr-8 xxl:mt-[3rem] lg:mt-7 xl:mt-10'>
          <div className='xxxl:min-w-[12.5rem] xxl:mr-5 xl:mr-4 lg:mr-2'>
            <Button {...requestButtonProps} />
          </div>
          <div className='xxxl:min-w-[10.9375rem]'>
            <Button {...callButtonProps} />
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='flex w-full'>
            <div className='w-1/2'>
              <Button {...requestButtonProps} />
            </div>
            <div className='w-1/2'>
              <Button {...callButtonProps} />
            </div>
          </div>
          <span className='flex content-center m-[.75rem] sm:m-[1.5rem] mb-0 sm:mb-0'>
            <img src={icon} alt='menu' className='md:w-[5.4rem] sm:w-[3.84rem] w-[2.5rem]' />
            <p className={`${textColor} capitalize font-bold text-[1.125rem] sm:text-[1.728rem] md:text-[2.43rem] ml-2 sm:ml-[.86rem] md:ml-[1.2rem] my-auto`}>{menuLabel}</p>
          </span>
          <a href='/'>
          <img src={logo.src} srcSet={logo.srcSet} alt={logoAltText} className='w-full' />
        </a>
      </div>
    </header>
  )
}

export default Header