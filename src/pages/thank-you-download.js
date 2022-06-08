import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


const ThankYouDownloadPage = () => (
  <Layout>
    <Seo title="Thank you for downloading" />

    <div className="thankYouContainer">
      <h1>Thank you!</h1>
      <p>Thank you for your interest in working together! I am so happy you have decided to know more about my work and how we can work together to elevate your presence online and attract your audience with bespoke and beautiful content.
        <br /><br />
        In a few moments, you will receive the download link via email.</p>
      <Link to='/'>
        <button className="secondaryButton">Back to homepage</button>
      </Link>
    </div>

  </Layout>
)

export default ThankYouDownloadPage

