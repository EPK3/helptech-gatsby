import React from 'react'
import Button from './Button'

const Header = ({ logo, logoAltText, menuData, requestButtonProps, callButtonProps, textColor, borderColor }) => {
  return (
    <header className='w-full flex justify-between bg-transparent absolute top-0 left-0'>
      <a href='/' className='xxxl:mt-[2rem] xxxl:ml-16'>
        <img src={logo.src} srcSet={logo.srcSet} alt={logoAltText} className='xxxl:w-[31rem]' />
      </a>
      <nav className='xxxl:mt-[3.87rem]'>
        {menuData.map(data => {
          return (
            <span key={data} className={`${textColor} font-medium hover:border-b-2 ${borderColor} text-base xl:text-[1.125rem] xxl:text-2xl xxxl:text-[2rem] cursor-pointer xxxl:mx-5 xxxl:pb-1`}>  
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
      <div className='flex xxxl:pr-16 xxxl:mt-[3rem]'>
        <div className='xxxl:min-w-[12.5rem] xxxl:mr-5'>
          <Button {...requestButtonProps} />
        </div>
        <div className='xxxl:min-w-[10.9375rem]'>
          <Button {...callButtonProps} />
        </div>
      </div>
    </header>
  )
}

export default Header