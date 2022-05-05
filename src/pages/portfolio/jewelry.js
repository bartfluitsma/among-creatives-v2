import * as React from "react"
import {graphql} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "../../styles/portfolioPages.css"
import Masonry from 'react-masonry-css'

// custom css
const breakpointColumns = {
  default: 3,
  700: 2,
};

// options lightbox
const options = {
  settings: {
    disablePanzoom: true,
  },
  caption: {
    showCaption: false,    
    captionColor: 'transparent',
  },
  buttons: {
    showDownloadButton: false,
  },
  // thumbnails: {},
  // progressBar:{},
}

const JewelryPage = ({data}) => (
    <Layout>
        <Seo title="Accessories"/>
        <div className="mainText">
            <h1>Jewelry</h1>
            <p>Welcome to the jewelry page.</p>
        </div>

        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <Masonry breakpointCols={breakpointColumns}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {data.allFile.edges.map(image => (
                        <div key={image.node.id}>
                            <a href={image.node.publicURL}
                                arial-label={image.node.base.replace(/\d+/g, '').split('-').join(' ')}>
                                <GatsbyImage image={image.node.childImageSharp.gatsbyImageData}
                                    alt={image.node.base.replace(/\d+/g, '').split('-').join(' ')}/>
                            </a>
                        </div>
                    ))} 
                </Masonry>
            </SRLWrapper>
        </SimpleReactLightbox>
    </Layout>
)

export default JewelryPage

export const query = graphql `
{
  allFile(
    filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "accessories"}}
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
`
