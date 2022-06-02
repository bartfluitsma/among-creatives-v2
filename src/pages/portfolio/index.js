import * as React from "react"
import Layout from "../../components/layout"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import '../../styles/portfolio.css' 

const PortfolioPage = () => {
  return (
    <Layout>
        <Seo title="Portfolio" />
        {/* main text */}
        <div className="mainTextPortfolio">
        <h1>Portfolio</h1>
        <p>I work with a wide range of products, from beauty and hygiene to accessories and jewellery, and I'm always up to new challenges.</p>
        <br />
        <p>Have a look at some of my recent projects.</p>
        </div>

        {/* photo categories */}
        <div className="containerCategories">


        <Link to="/portfolio/jewelry">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/categories/rings-in-shadow-with-travertine.jpg'
            alt='rings-in-shadow-with-travertine'
            placeholder="blurred"
          />
          <h2>Jewelry</h2>
          </div>
        </div>
        </Link>

        <Link to="/portfolio/stationery">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/categories/stationary-card-product-photo.jpg'
            alt='stationary-card-product-photo'
            placeholder="blurred"
          />
          <h2>Stationery</h2>
          </div>
        </div>
        </Link>

        <Link to="/portfolio/beauty-and-hygiene">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/homepage/face-oil-product-photography-among-creatives.jpg'
            alt='organic-soap-and-oranges'
            placeholder="blurred"
          />
          <h2>Beauty & Hygiene</h2>
          </div>
        </div>
        </Link>

        <Link to="/portfolio/fragrances">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/categories/organic-fragrance-restore-product-photo.jpg'
            alt='Organic-fragrance-restore-product-photo'
            placeholder="blurred"
          />
          <h2>Fragrances</h2>
          </div>
        </div>
        </Link>

        <Link to="/portfolio/accessories">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/categories/rings-laying-on-book.jpg'
            alt='Rings-laying-on-book'
            placeholder="blurred"
          />
          <h2>Accessories</h2>
          </div>
        </div>
        </Link>

        <Link to="/portfolio/food">
        <div className="categoriesPortfolio">
          <div className="categoryCard">
          <StaticImage src='../../images/categories/Stack of almond chipped, chocolate flavoured cookies on white background.jpg'
            alt='Rings-laying-on-book'
            placeholder="blurred"
          />
          <h2>Food</h2>
          </div>
        </div>
        </Link>

        </div>

    </Layout>
  )
}

export default PortfolioPage