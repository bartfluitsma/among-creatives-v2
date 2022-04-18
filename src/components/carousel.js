import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css"

export default class CenterMode extends Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="containerCards">
        <Slider {...settings}>

          {/* mini shoot */}
          <Link to="/packages#miniShoot">
            <div>
              <div className="packageCard smallerPackage">
                <StaticImage src='../images/homepage/earrings-laying-in-shadow-on-travertin.jpg'
                  alt='Among Creatives logo'
                  placeholder="blurred"
                  loading="lazy"
                />
                <h4>Mini shoot</h4>
                <p>Perfect if you're just starting and want to test out.</p>
              </div>
            </div>
          </Link>

          {/* standard package */}
          <Link to="/packages#refreshPackage">
            <div>
              <div className="packageCard middlePackage">
                <StaticImage src='../images/homepage/hand-taking-toothbrush-out-of-holder.jpg'
                  alt='Among Creatives logo'
                  placeholder="blurred"
                  loading="lazy"
                />
                <h4>Refresh Package</h4>
                <p>For a new product launch or update of visual content.</p>
              </div>
            </div>
          </Link>

          {/* premium package */}
          <Link to="/packages#premiumPackage">
          <div>
            <div className="packageCard smallerPackage">
              <StaticImage src='../images/homepage/face-oil-product-photography-among-creatives.jpg'
                alt='Among Creatives logo'
                placeholder="blurred"
                loading="lazy"
              />
              <h4>Premium package</h4>
              <p>Full content makeover for a high range of products.</p>
              <br /><br />
            </div>
          </div>
          </Link>

        </Slider>

        <div className="bookNowButton">
          <Link to='/packages'>
            <button className="primaryButton">Find out more</button>
          </Link>
        </div>
      </div>
    );
  }
}

