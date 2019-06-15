import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <h2>This is a description</h2>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default AboutPage
