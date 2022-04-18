import * as React from "react"
import NavBar from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
        <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
