import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <h2>This is a description</h2>
      <Link to="/contact">Contact me</Link>
      <Footer />
    </div>
  )
}

export default AboutPage
