import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const InstagramCarousel = () => {
    return (

        <div>
            {/* new footer images */}
            <div className="instagramFooter">
                <p className="instaTextFollow">
                    Follow me on instagram!
                </p>
                <div className="instagramImagesContainer">
                    <StaticImage src='../images/footer/Flatlay of organic bath and shower gel.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/Golden earrings on a stick above white linen.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/Golden earrings in shadow on travertin stone.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/Hand holding Salt and Stone sunscreen against knee at the beach.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/The ordinary product flatlay on marble background.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/Fushi organic face oil.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                    <StaticImage src='../images/footer/Hand picking wooden toothbrush out of cup.jpg'
                        alt='Among Creatives logo'
                        placeholder="blurred"
                    />
                </div>

                <a href="https://www.instagram.com/amongcreatives/" target="_blank" rel="noopener noreferrer">
                    <p className='instaLinkText'>@amongcreatives</p>
                </a>
            </div>
        </div>
    )
}


export default InstagramCarousel