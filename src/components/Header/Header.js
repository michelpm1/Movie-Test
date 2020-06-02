import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.Header}
  >
    <div>
      header
      {/* <Link
        to="/"
      >
        <img className={styles.Xlogo} alt="X-team-logo" src={XteamLogo}></img>
      </Link> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
