import * as React from "react"
import HomeHero from "../components/HomeHero"
import Header from "../components/Header"
import { HeaderFunction, HomeHeroFunction } from "../DataImports"

const Home = () => {

  return (
    <div>
      <Header {...HeaderFunction()} />
      <HomeHero {...HomeHeroFunction()} />
    </div>
  )
}

export default Home
