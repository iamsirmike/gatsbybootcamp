import React from "react"
import { Link } from "gatsby"

import headerStyle from "../styles/header.module.css"

const Header = () => {
  return (
    <div>
      <header className={headerStyle.header}>
        <h1>
          <Link className={headerStyle.logo} to="/">
            Asamoah Michael
          </Link>
        </h1>
        <nav>
          <ul className={headerStyle.navList}>
            <li>
              <Link to="/" className={headerStyle.navItem}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className={headerStyle.navItem}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className={headerStyle.navItem}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
