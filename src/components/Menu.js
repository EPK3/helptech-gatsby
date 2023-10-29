import React from 'react'
import Button from './Button'

function Menu({ submenu, menuImg, menuAltText, vanImg, vanAltText, buttonProps }) {
  return (
    <div className='bg-white w-full flex xxxl:h-[46.08331rem] xxl:h-[34.5625rem] xl:h-[25.92188rem] lg:h-[18.43331rem] shadow-sm'>
        <div className='flex justify-center content-center m-auto'>
            <img src={menuImg} alt={menuAltText} className='m-auto' />
        </div>
        <div>
            {submenu.map(data => {
                <span className='text-orange hover:text-white hover:fill-white border-b-2 border-orange'>
                    <p className='font-body font-normal xxxl:text-[2rem] xxl:text-2xl xl:text-xl text-base'>{data.label}</p>
                    {data.subSubMenu && <img src='../images/Arrow.svg' fill='#F49A04' alt='arrow'/>}
                </span>
                {data.subSubMenu && 
                    <div>
                        {data.subSubMenu.map(subMenu => {
                            <div className='bg-gray border-b-2 border-white hover:bg-gray-light'>
                                <a href={subMenu.link} className='text-blue'>{subMenu.label}</a>
                            </div>
                        })}
                    </div>
                }
            })}
        </div>
        <div>
            <img src={vanImg} className={vanAltText} />
            <div>
                <Button {...buttonProps} />
            </div>
        </div>
    </div>
  )
}

export default Menu