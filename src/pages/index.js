import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello</h1>
      <h2>This is a description</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
      <Footer></Footer>
    </div>
  )
}

export default IndexPage
