import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import '../styles/form.css'
import '../styles/packages.css'

const ServicesPage = () => {
  return (
    <Layout pageTitle="About page">        
      <Seo title="Packages"/>

      <div className="mainServices">
        <h1>Packages</h1>

        <br />

        <p className="boldText">Ready to start? Let's create some magic!</p>
        <br /><br />
        <p>I will be here in every step to make sure we create a seamless, fun and efficient work together!</p>
        <br /><br />
        <p>From mini-shoot, content refresh, product launching or just starting out, the packages below are designed to reply to your needs.</p>
        <br /><br />
        <p><strong>All packages include</strong> a discovery call, a moodboard, free shipping delivery, pre- and post-production, props for the shoots, and a online gallery for the images. </p>
        <br /><br />
        <a href="#miniShoot"><button className="secondaryButton">Discover packages</button></a>

      </div>

      {/* packages section */}
      <hr className="smallHR" />

      {/* mini package */}
      <div className="packagesContainer" id="miniShoot">
        <div className="imageContainer">
          <StaticImage src='../images/homepage/earrings-laying-in-shadow-on-travertin.jpg'
            alt='Among Creatives logo'
            placeholder="blurred"
            loading="lazy"
          />
        </div>
        <div className="packageExplanation">
          <h2>Mini shoot</h2>
          <p>This package is perfect to try out!</p>
          <br />
          <p><strong>It includes:</strong></p>
          <ul>
            <li>10 high quality images</li>
            <li>A high five from the zoet</li>
            <li>Optimized images for social media or your website</li>
          </ul>
        </div>
      </div>

      {/* standard package */}
      <div className="packagesContainer" id="refreshPackage">

        <div className="packageExplanationLeft">
          <h2>Refresh package</h2>
          <p>With this package you'll have more quality images of you products to share online.</p>
          <br />
          <p><strong>It includes:</strong></p>
          <ul>
            <li>10 high quality images</li>
            <li>A high five from the zoet</li>
            <li>Optimized images for social media or your website</li>
          </ul>
        </div>

        <div className="imageContainer imageRight">
          <StaticImage src='../images/homepage/hand-taking-toothbrush-out-of-holder.jpg'
            alt='Among Creatives logo'
            placeholder="blurred"
            loading="lazy"
          />
        </div>
      </div>

      {/* premium package */}
      <div className="packagesContainer" id="premiumPackage">
        <div className="imageContainer">
          <StaticImage src='../images/homepage/face-oil-product-photography-among-creatives.jpg'
            alt='Among Creatives logo'
            placeholder="blurred"
            loading="lazy"
          />
        </div>

        <div className="packageExplanation">
          <h2>Premium package</h2>
          <p>A package that will enable you to have a complete set of images for a new product line or brand update.</p>
          <br />
          <p><strong>It includes:</strong></p>
          <ul>
            <li>40 high quality images</li>
            <li>A high five from the zoet</li>
            <li>Optimized images for social media or your website</li>
          </ul>
        </div>
      </div>

      {/* Price list */}
      <hr className="smallHR" />
      <div className="priceList" id="priceList">
        <h2>Download price list</h2>
        <p>Fill in your name and email below and you'll receive my price list directly in your inbox!</p>


        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="priceList" action="/thank-you">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="priceList" />
          <label>
            <input type="text" name="name" id="name" placeholder="Name" required />
          </label>
          <label className="labelNoMargin">
            <input type="email" name="email" id="email" placeholder="Email" required />
          </label>
          <button type="submit">Download Pricelist</button>
        </form>
      </div>

    </Layout>
  )
}

export default ServicesPage