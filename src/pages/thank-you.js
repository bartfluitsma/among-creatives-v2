import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


const ThankYouPage = () => (
  <Layout>
    <Seo title="Thank you page" />

    <div className="thankYouContainer">
      <h1>Thank you!</h1>
      <p>Thank you so much for your interest in working together! I will be in touch soon :)</p>
      <Link to='/'>
        <button className="secondaryButton">Back to homepage</button>
      </Link>
    </div>



  </Layout>
)

export default ThankYouPage

