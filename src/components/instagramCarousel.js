import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import "../styles/instagramCarousel.css"

const instagramCarousel = () => (

    <StaticQuery
        query={graphql `
        {
          allFile(
            filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "jewelry"}}
            sort: {order: DESC, fields: base}
          ) {
            edges {
              node {
                base
                id
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
                }
                publicURL
              }
            }
          }
        }
        `}
        render={data => (
            <div className="containerCarousel">
                {data.allFile.edges.map(image => (
                        <div key={image.node.id}>
                            <a href={image.node.publicURL}
                                arial-label={image.node.base.replace(/\d+/g, '').split('-').join(' ')}>
                                <GatsbyImage className="imageInsta" image={image.node.childImageSharp.gatsbyImageData}
                                    alt={image.node.base.replace(/\d+/g, '').split('-').join(' ')}/>
                            </a>
                        </div>
                    ))} 
            </div>
        )} />

)

export default instagramCarousel