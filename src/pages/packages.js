import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Layout from "../components/layout"
import '../styles/form.css'
import '../styles/packages.css'
import { Link } from "gatsby"

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
        <a href="#packages"><button className="secondaryButton">Discover packages</button></a>

      </div>

      {/* packages section */}
      <hr className="smallHR" />

      {/* packages */}
      <div className="containerIncludes" id="packages">
        <h2>All packages include:</h2>
        <div>
        <ul>
            <li>Moodboard</li>
            <li>High-quality resolution images</li>
            <li>Photos styled with backgrounds and props to suit your brand aesthetic</li>
            <li>Pre- and post-production services include discovery call (optional), retouching/editing, mood board/shoot plan overview, retouching and editing</li>
            <li>Free product delivery to my studio</li>
            <li>Digital delivery via a link emailed to you at the conclusion of the shoot</li>
          </ul>
          </div>
          <p>If you require very specific props for your images eg. flowers, fruits or vegetables, particular backdrops etc. an additional prop fee will be added to your final invoice. This price will be determined when booking prior to the photoshoot.</p>
      </div>

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
          <p><strong>From 5 to 15 images</strong></p>
        </div>
      </div>

      {/* standard package */}
      <div className="packagesContainer" id="refreshPackage">

        <div className="packageExplanationLeft">
          <h2>Refresh package</h2>
          <p>With this package you'll have more quality images of you products to share online.</p>
          <br />
          <p><strong>From 16 to 25 images</strong></p>
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
          <h2>Complete package</h2>
          <p>A package that will enable you to have a complete set of images for a new product line or brand update.</p>
          <br />
          <p><strong>From 26 to 40 images</strong></p>
        </div>
      </div>
      
      {/* Monthly package */}
      <div className="packagesContainer monthlyPackage" id="monthlyPackage">

        <div className="packageExplanationLeft">
          <h2>Monthly package</h2>
          <p>Make sure you’re good for some new photos each month! A new brief is reviewed each month to ensure the latest brand strategy.</p>
          <br />
          <p><strong>Up to 15 images per month</strong></p>
        </div>

        <div className="imageContainer imageRight">
          <StaticImage src='../images/homepage/hand-taking-toothbrush-out-of-holder.jpg'
            alt='Among Creatives logo'
            placeholder="blurred"
            loading="lazy"
          />
        </div>
      </div>

      {/* contact for other packages */}
      <div className="contactPackagesDiv">
        <h3>Cannot find any packages that suit you?</h3>
        <p>No worry! just get in touch and we will work out together a custom package that suits your exact needs.</p>
        <Link to="/contact"><button className="secondaryButton">Contact me</button></Link>
      </div>


      {/* Welcome guide list */}
      <hr className="smallHR" />
      <div className="priceList" id="priceList">
        <h2>Download welcome guide</h2>
        <p>Download the welcome guide to get the full-service details.</p>


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