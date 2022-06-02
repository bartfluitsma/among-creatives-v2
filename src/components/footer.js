import React from 'react'
import FooterNav from './footerNav';
import InstagramCarousel from './instagramBanner';
import "../styles/footer.css"

export default function Footer() {

    return (
        <div className="footer">
            <InstagramCarousel />
            <FooterNav />
        </div>
    )

}