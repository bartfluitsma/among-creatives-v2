import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/book.css'

const BookingPage = () => {
    return (
        <Layout>
            <Seo title="Book a shoot" />
            <div className="bookingContainer">
                <h1>Inquiry</h1>
                <p>Get in touch so we can start bringing your brand vision to life and create impactful content!</p><br />
                <p>Please fill in the questions below and will be in touch within 48h.</p><br />
                <p>If you have questions before booking, please just drop me an email.</p><br />
                <p>I'm already excited to start working together!</p>
            </div>
            <hr className="smallHR" />

            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="booking" action="/thank-you">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="booking" /> {/* name of the person */}
                <label>
                    Your name<span className="asterix">*</span>
                    <br />
                    <input type="text" name="name" id="name" required />
                </label>

                {/* email address */}
                <label>
                    Email address<span className="asterix">*</span>
                    <br />
                    <input type="email" name="email" id="email" required />
                </label>

                {/* Company name */}
                <label>
                    What is the name of your company?
                    <br />
                    <input type="text" name="company-name" id="companyName" />
                </label>

                {/* link insta or website */}
                <label>
                    Do you have a link to your website, instagram or a different platform?<span className="asterix">*</span>
                    <br />
                    <input type="text" name="socialLink" id="socialLink" placeholder="e.g. instagram.com/amongcreatives" required />
                </label>

                {/* brand description */}
                <label>
                    In three words, how would you describe your brand?
                    <br />
                    <input type="text" name="company-description" id="companyDescription" />
                </label>

                {/* The products that they would like to shoot */}
                <label>
                    What kind of products would you like to shoot?<span className="asterix">*</span>
                    <br />
                    <textarea type="text" name="products to shoot" id="products" rows="4" required />
                </label>

                {/* Style for the shoot */}
                <label>
                    What kind of style are you looking for in this shoot?
                    <br />
                    <textarea type="text" name="type of shoot" id="type" placeholder="e.g.; neutral, warm & cozy, bright & fresh, etc." rows="2" />
                </label>

                {/* checkboxes for purpose website */}
                <br />
                <p className="textCheckbox">
                    For what purpose do you need the photos?
                    <i>(multiple possible)</i>
                </p>
                <br />
                <div className="checkBoxes">
                    <label htmlFor="SocialMedia">
                        <input type="checkbox" name="SocialMedia" id="SocialMedia" />
                        Social media
                    </label>

                    <label htmlFor="Magazine">
                        <input type="checkbox" name="Magazine" id="Magazine" />
                        Magazine
                    </label>

                    <label htmlFor="Website">
                        <input type="checkbox" name="Website" id="Website" />
                        Website
                    </label>

                    <label htmlFor="Newsletter">
                        <input type="checkbox" name="Newsletter" id="Newsletter" />
                        Newsletter
                    </label>

                    <label htmlFor="Advertisement">
                        <input type="checkbox" name="Advertisement" id="Advertisement" />
                        Advertisement
                    </label>

                    <label htmlFor="Other">
                        <input type="checkbox" name="Other" id="Other" />
                        Other
                    </label>
                </div>

                {/* goal of the shoot */}
                <label>
                    What would you like to highlight in this shoot?
                    <br />
                    <textarea type="text" name="type of shoot" id="type" placeholder="e.g.; help customers understand the product, highlight specific features or ingredients, etc." rows="2" />
                    <br />
                    <br />
                </label>
                

                {/* checkboxes for package website */}
                <br />
                <p className="textCheckbox">
                    Which package would you like to have?
                    <span className="asterix">*</span>
                </p>
                <br />
                <div className="checkBoxes">
                    <label htmlFor="miniShoot">
                        <input type="radio" name="package" id="miniShoot" required />
                        Mini Shoot
                    </label>

                    <label htmlFor="refreshShoot">
                        <input type="radio" name="package" id="refreshShoot" required />
                        Refresh Shoot
                    </label>

                    <label htmlFor="premiumShoot">
                        <input type="radio" name="package" id="premiumShoot" required />
                        Full Shoot
                    </label>

                    <label htmlFor="monthlyShoot">
                        <input type="radio" name="package" id="monthlyShoot" required />
                        Monthly package
                    </label>

                    <label htmlFor="customShoot">
                        <input type="radio" name="package" id="customShoot" required />
                        Custom Shoot
                    </label>

                    <label htmlFor="notSureShoot">
                        <input type="radio" name="package" id="notSureShoot" required />
                        Not sure yet
                    </label>
                </div>

                {/* amount of photos */}
                <label className="numberInput">
                    How many photos would you like to have?<span className="asterix">*</span>
                    <br />
                    <input type="number" name="number of photos" id="ready" placeholder="e.g. 30" required />
                </label>

                {/* amount of products */}

                <label className="numberInput">
                    How many products would you like to shoot?
                    <br />
                    <input type="number" name="number of products" id="ready" placeholder="e.g. 2" />
                </label>

                {/* props for the shoot */}
                <label>
                    Please specify if there is any item (prop) or color that must be present in the shoot:
                    <br />
                    <textarea type="text" name="type of shoot" id="type" rows="2" />
                </label>

                {/* starting date */}
                <br />
                <p className="textCheckbox">
                    When would you like to receive the photos?
                </p>
                <br />
                <div className="dateContainer">
                    <div className="checkBoxes startDate">
                        <label htmlFor="ASAP">
                            <input type="checkbox" name="ASAP" id="ASAP" />
                            As soon as possible
                        </label>

                    </div>
                    <br />
                    <br className="breakBottom" />
                    <label className="specificDate">
                        <i>On a specific date</i>
                        <input type="date" id="start" name="trip-start"></input>
                    </label>
                </div>
                <br />
                <br />
                <br /> {/* button to send form */}
                <button type="submit">Request proposal</button>
            </form>

        </Layout>
    )
}

export default BookingPage
