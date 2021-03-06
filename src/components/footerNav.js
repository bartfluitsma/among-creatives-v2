import * as React from "react"
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const ActiveLink = {
    borderBottom: "5px solid var(--secondaryColor)",

}

const FooterNav = () => {
    return (

        <div>
        {/* navigation footer */}
        <div className="footerNav">
                <div className="fullContainerFooter">
                    <div className="footerNavItems">
                        <div className="twoColumnsLinks">
                            <ul className="footerLinks">
                                <li><Link to='/' activeStyle={ActiveLink}>Home</Link></li>
                                <li><Link to='/about' activeStyle={ActiveLink}>About</Link></li>
                                <li><Link to='/portfolio' activeStyle={ActiveLink}>Portfolio</Link></li>
                            </ul>
                            <ul className="footerLinks">
                                <li><Link to='/packages' activeStyle={ActiveLink}>Packages</Link></li>
                                <li><Link to='/contact' activeStyle={ActiveLink}>Contact</Link></li>
                                <li><Link to='/book'>Book</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="footerLinks">
                                <li><Link to='/packages#priceList'>Welcome guide</Link></li>
                                <li><Link to='/about#FAQ'>FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="socialIconsContainer">
                            <ul className="footerLinks footerIconLinks">
                                <li>
                                    <a href="https://www.instagram.com/amongcreatives" target="_blank" rel="noopener noreferrer">
                                        <StaticImage className='footerIcon' src='../images/web-icons/instagram-icon.svg'
                                            alt='Instagram icon'
                                            placeholder="blurred"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://pinterest.com/amongcreatives/" target="_blank" rel="noopener noreferrer">
                                        <StaticImage className='footerIcon' src='../images/web-icons/pinterest-icon.svg'
                                            alt='Pinterest icon'
                                            placeholder="blurred"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <Link className='footerLogo' to='/'>
                        <StaticImage src='../images/logo-among-creatives.svg'
                            alt='Among Creatives logo'
                            placeholder="blurred"
                        />
                    </Link>
                </div>
                <p className="copyRight">Among Creatives  ?? {new Date().getFullYear()}</p>
            </div>
</div>
    )
  }
  
  
  export default FooterNav