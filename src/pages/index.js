import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/Profile'
import About from '../components/About'
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-content">
      <Profile />
      <About />
    </div>
  </Layout>
)

export default IndexPage
