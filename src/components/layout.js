import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Navigation from './navigation'

const Layout = ({ children }) => (
  <Fragment>
    <Navigation />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
