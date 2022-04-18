import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// styles
const headingStyles = {
  maxWidth: 320,
  textAlign: "center",
  marginTop: "15vh",  
  marginBottom: "3vh",
}

const paragraphStyles = {
  marginBottom: 48,
  textAlign: "center",
}

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        this page doesn't exist, or is moved to a different place. 
        <br />
        Please make sure you're typing in the correct URL.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
          </>
        ) : null}
        <br />
        <Link to="/" className="primaryButton">To the homepage</Link>
      </p>
      <br /><br />
  </Layout>
)

export default NotFoundPage

