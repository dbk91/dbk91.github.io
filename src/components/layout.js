import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import './layout.css'

library.add(faGithub, faLinkedinIn)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="layout-container">{children}</div>
        <footer className="main-footer">
          <a
            href="https://github.com/dbk91"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-kelly-4191a972/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-icon"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
          </a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
