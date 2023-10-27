import * as React from "react"
import Button from "../components/Button"

const IndexPage = () => {

  const buttonProps = {
    isLink: true, 
    bgColor: 'bg-orange', 
    textColor: 'text-white',
    fontSize: 'text-xl', 
    fontWeight: 'font-bold', 
    label: 'Schedule Service Now',
    href: `tel:test`,
  }

  return (
    <div>
      <Button {...buttonProps} />
    </div>
  )
}

export default IndexPage
