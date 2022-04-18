import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import CenterMode from "../components/carousel"
import Seo from "../components/seo"
import '../styles/homepage.css'
import '../styles/splitSection.css'

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <div className="Banner">
        <div className="containerTextCTA">
          <h1>Product & Lifestyle photography</h1>
          <p>Sustainable & ethical Brands</p>
          <Link to='/book'>
            <button className="primaryButton">Book a shoot</button>
          </Link>
        </div>
      </div>

      {/* about section */}

      <div className="splitSection">
        <div className="firstHalf">
          <h2>Hey, I’m Nass, a product and lifestyle photographer for sustainable and conscious businesses.</h2>
          <div className="colorLineAccent"></div>
          <br />
          <p>I love creating fresh, minimalistic and clear visuals that will boost your sales and get your audience to stop scrolling!
            <br /><br />

            I offer creative and thoughtful content that reflects your brand and tells your products' stories that set your customer expectation.

            <br /><br />

            I am working remotely, simply send me your products and I’ll photograph them and send them back (as easy as that).
            <br /><br />

            I can’t wait to know more about your lovely business :)</p>
          <br />
          <Link to='/book'>
            <button className="secondaryButton">Let's work together</button>
          </Link>
        </div>
        <div className="secondHalf">
          <StaticImage src='../images/homepage/nass-product-photographer-working.png'
            alt='Among Creatives logo'
            placeholder="blurred"
          />
        </div>
      </div>

      {/* quote section */}
      <div className="quoteBanner">
        <q>Creating thoughtful and eye-catching imagery that helps build your brand identity and boosts your sales!</q>
      </div>

      {/* Grid photos */}
      <div className="outer-container-grid">
      <Link to='/portfolio'>
        <div className="grid-container">
            <div className="grid-item grid-item-1"></div>
            <div className="grid-item grid-item-2"></div>
            <div className="grid-item grid-item-3"></div>
            <div className="grid-item grid-item-4"></div>
        </div>
        </Link>

        <div className="buttonContainer">
          <Link to='/portfolio'>
            <button className="secondaryButton">View portfolio</button>
          </Link>
        </div>
      </div>

      {/* packages section */}
      <hr />
      <div className="packages">
        <h3>Packages</h3>
        <p>From mini-shoot, content refresh, product launch or if you're just starting out, the packages below are designed to reply to your needs</p>
        <CenterMode />
      </div>
      <hr />
    </Layout>
)

export default IndexPage


