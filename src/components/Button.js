import React from 'react'

const Div = ({children, ...props}) => <button {...props}>{children}</button>
const Link = ({children, ...props}) => <a {...props}>{children}</a>

const Button = ({ isLink, bgColor, textColor, fontSize, fontWeight, label }) => {
    const Wrapper = isLink ? Link : Div
  return (
    <Wrapper className={`${bgColor} w-full`}>
        <p className={`${textColor} ${fontSize} ${fontWeight} py-4`}>{label}</p>
    </Wrapper>
  )
}

export default Button