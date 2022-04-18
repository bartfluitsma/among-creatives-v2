import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import '../styles/about.css'
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
{/* about section */}

<div className="splitSection">
        <div className="firstHalfAbout">
          <p>Hi, I'm Nass!
            <br /><br />

            I’m a product photographer for sustainable and conscious businesses worldwide.

            <br /><br />

            I help wonderful brands to grow their online presence and visual identity, whether it is for your social media or your websites.

          </p>

          <div className="quoteWithLine">
            <p className="quoteText">
              "I love creating minimalistic shots with an airy look & feel, that will focus all the attention of your audience on your products!"
            </p>
          </div>

          <p>We will review together your vision to create awesome, fresh & natural content that reflects your brands and help you thrive!
            <br /><br />

            Looking for engaging visuals?

            <br /><br />

            Fair-tastic, let's have a chat!

          </p>
          <br /><br />
          <Link to='/book'>
            <button className="primaryButton">Let's work together</button>
          </Link>
        </div>
        <div className="secondHalfAbout">
          <StaticImage src='../images/homepage/nass-product-photographer-working.png'
            alt='Among Creatives logo'
            placeholder="blurred"
          />
        </div>
      </div>

      <hr />

      <p className="quote">
        By capturing bespoke and creative shots, I will tell the story of your product and get your audience to stop scrolling!
      </p>

      <div className="interest">
        <p>Want to know more?</p>
        <Link to='/packages'>
          <button className="secondaryButton">See packages</button>
        </Link>
      </div>

      {/* quote section */}
      <div className="quoteBanner" id="FAQ">
        <p>Frequently Asked Questions</p>
      </div>

      {/* faq questions and answers */}

      <div className="faqQuestions">
        <div className="faqContainer faqQuestionsLeft">
          <details>
            <summary>
              When and how do I send you my products?
            </summary>
            <p>After our discovery call and confirmation of the shoot, I will share my address with you. With this, you can send your product to me via post with standard delivery. After the shoot, I’ll send your products back to you. In order to plan, I need to receive your products 2 weeks prior to the actual date of the shoot.</p>
          </details>
          <details>
            <summary>
              Do I have to pay for the delivery of the product?
            </summary>
            <p>No, the delivery is free of charge and I’ll take care of the cost. I’ll create a label for your package and you just need to drop it at a post office and I will take care of the rest ;) </p>
          </details>
          <details>
            <summary>
            How to book a shoot with you?
            </summary>
            <p>Via the page <Link to="/book">“book a shoot”</Link> or contact me directly via <a href="https://www.instagram.com/amongcreatives/" target="_blank" rel="noopener noreferrer">Instagram</a> or <a href="mailto:hello@amongcreatives.com">email</a>, those are fine as well :) Once I review your inquiry, I will get in touch with you to start the process. Good to know, the booking is not automatically confirmed after you make an inquiry online.</p>
          </details>
        </div>
        <div className="faqContainer faqQuestionsRight">
          <details>
            <summary>
            How long does it take to get my pictures?
            </summary>
            <p>The delivery of images will depend on the number of photos and the time to receive the products, but generally, it takes 6-10 days to deliver your online gallery.</p>
          </details>
          <details>
            <summary>
            How will I receive my photos?
            </summary>
            <p>After the shoot, I will send you a link to your online gallery where you will choose your photos and can directly download them (the number of photos you can choose will depend on your package). </p>
          </details>
          <details>
            <summary>
            Do you work internationally?
            </summary>
            <p>YES! No matter where you are, I would love to shoot your products. Just send them to me and will return them to you right after :)</p>
          </details>
        </div>
      </div>
  </Layout>
)

export default AboutPage
