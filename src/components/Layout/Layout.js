import Header from '../Header/Header';
import React from "react"
import PropTypes from "prop-types"
import "./Layout.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <main>
                <Header />
                {children}
            </main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
