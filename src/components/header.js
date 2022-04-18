import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import "../styles/layout.css"
import "../styles/navigationBar.css"

const ActiveLink = {
    borderBottom: "5px solid var(--secondaryColor)",
}

export default function NavBar() {

    // show navigation on click
    const [style, setStyle] = useState(true)

    const changeStyle = () => {
        setStyle(!style)
    }

    return (

        <nav>
            {/* mobile menu button */}
            <button className='mobileMenu' onClick={changeStyle} onKeyDown={changeStyle}>
                <div className={style ? 'line' : 'line1'}></div>
                <div className={style ? 'line' : 'line2'}></div>
                <div className={style ? 'line' : 'line3'}></div>
            </button>

            {/* mobile logo */}
            <Link className='mobileOnly' to='/'>
                <StaticImage src='../images/logo-among-creatives-small.svg'
                            alt='Among Creatives logo'
                            placeholder="blurred"
                            width={40}
                        />
                        </Link>

            <div className={style ? 'hideMenu' : 'overlayMenu'} >
                <ul className="links">
                    <li><Link to='/' activeStyle={ActiveLink}>Home</Link></li>
                    <li><Link to='/about' activeStyle={ActiveLink}>About</Link></li>
                    <li><Link to='/portfolio' activeStyle={ActiveLink}>Portfolio</Link></li>
                    <li className='desktopOnly logoNav'><Link to='/'>
                        <StaticImage src='../images/logo-among-creatives.svg'
                            alt='Among Creatives logo'
                            placeholder="blurred"
                        />
                    </Link></li>
                    <li><Link to='/packages' activeStyle={ActiveLink}>Packages</Link></li>
                    <li><Link to='/contact' activeStyle={ActiveLink}>Contact</Link></li>
                    <li><Link className='primaryButton' to='/book'>Book a shoot</Link></li>
                </ul>
            </div>

        </nav>
    )

}