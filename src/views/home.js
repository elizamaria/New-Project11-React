import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header1 from '../components/header1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>New Project11</title>
        <meta property="og:title" content="New Project11" />
      </Helmet>
      <Header></Header>
      <Header></Header>
      <img
        alt="image"
        src="/playground_assets/277177663_506825974347832_6708718020507180410_n-300h.jpeg"
        className="home-image"
      />
      <Header1
        button="Login 1"
        button1="Register1"
        rootClassName="header1-root-class-name"
      ></Header1>
      <img
        alt="image"
        src="/playground_assets/220424937_843490599617363_5822187964616304490_n-200w.jpeg"
        className="home-image1"
      />
      <span className="home-text">Text</span>
    </div>
  )
}

export default Home
