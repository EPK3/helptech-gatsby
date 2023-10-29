import React from 'react'

const Div = ({children, ...props}) => <button {...props}>{children}</button>
const Link = ({children, ...props}) => <a {...props}>{children}</a>

const Button = ({ isLink, bgColor, textColor, fontSize, fontWeight, label, ...props }) => {
    const Wrapper = isLink ? Link : Div
  return (
    <Wrapper {...props} className={`${bgColor} ${textColor} flex justify-center w-full cursor-pointer`}>
        <p className={`xxl:py-6 xl:py-4 lg:py-2 py-6 ${fontSize} ${fontWeight} capitalize font-body m-auto`}>{label}</p>
    </Wrapper>
  )
}

export default Button