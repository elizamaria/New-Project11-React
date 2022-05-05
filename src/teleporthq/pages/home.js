import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header1 from '../components/header1'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project11</title>
        <meta property="og:title" content="New Project11" />
      </Helmet>
      <Header></Header>
      <Header></Header>
      <img
        alt="image"
        src="/playground_assets/277177663_506825974347832_6708718020507180410_n.jpeg"
        className={styles['image']}
      />
      <Header1
        button="Login 1"
        button1="Register1"
        rootClassName="root-class-name"
      ></Header1>
      <span className={styles['text']}>
        <span>
          asdasdasd
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>as das d</span>
        <br></br>
        <span>as d</span>
        <br></br>
        <span>
          asd
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>asd</span>
        <br></br>
        <span></span>
        <br></br>
        <span>asd</span>
        <br></br>
        <span></span>
        <br></br>
        <span></span>
      </span>
      <img
        alt="image"
        src="/playground_assets/220424937_843490599617363_5822187964616304490_n.jpeg"
        className={styles['image1']}
      />
      <span className={styles['text18']}>Text</span>
    </div>
  )
}

export default Home
