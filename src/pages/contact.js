import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/form.css'
import '../styles/contact.css'

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact"/>
      <div className="contactPage">
      <h1>Contact</h1>
      <div className="contactIntro">
      <p>Got a question before booking don't hesitate to ask me your questions via the below form or send me an email at <a href="mailto:hello@amongcreatives.com">hello@amongcreatives.com</a>.</p>
        <br /><br />
        <p>For bookings, please <Link to="/book"> click here.</Link></p>
        </div>

      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/thank-you">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
          Your name <br />
          <input type="text" name="name" id="name" required />
        </label>
        <label>
          Email address <br />
          <input type="email" name="email" id="email" required />
        </label>
        <label>
          Please write your message <br />
          <textarea name="message" id="message" rows="5" required />
        </label>
          <button type="submit">Send message</button>
        </form>

      </div>
    </Layout>
  )
}

export default ContactPage