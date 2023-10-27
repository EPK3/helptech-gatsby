import * as React from "react"
import Button from "../components/Button"
import { ButtonFunction } from "../DataImports"

const IndexPage = () => {

  return (
    <div>
      <Button {...ButtonFunction()} />
    </div>
  )
}

export default IndexPage
