import PropTypes from "prop-types"
import React from "react"
import styles from "./Header.module.css";

const Header = ({ siteTitle }) => (
  <header className={styles.Header}>
    <h3>The Movie Company</h3>
  </header>
)

export default Header
