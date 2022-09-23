import React from 'react'
import Featured from '../../Components/featured/Featured'
import FeaturedProperty from '../../Components/FeaturedProperty/FeaturedProperty'
import Footer from '../../Components/footer/Footer'
import { Header } from '../../Components/Header/Header'
import MailList from '../../Components/mailList/MailList'
import { NavBar } from '../../Components/navBar/NavBar'
import {PropertyList} from '../../Components/propertyList/PropertyList'
import './Home.css'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
