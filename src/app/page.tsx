import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import CallToAction from '../../components/calltoaction/CallToAction'
import Study from '../../components/studyblogs/Study'
import Footer from '../../components/footer/Footer'
import Academics from '../../components/academics/Academics'
import Explore from '../../components/explore/Explore'
import News from '../../components/news/News'
import Discover from '../../components/discover/Discover'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CallToAction />
      <Study />
      <Academics />
      <Explore />
      <News />
      <Discover />
      <Footer />
    </div>
  )
}

export default page
