import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <>
    <div className={styles.page}>
      <div className={styles.navbar}>
          <img src="/logo.png" alt="logo" />
          <div className={styles.button}>
            <h1>Blog</h1>
            <h1>Forums</h1>
            <h1>Sign in</h1>
          </div>
      </div>
      <div className={styles.main}>
      <div className={styles.main_left}>
        <h1>Welcome <br /><span>Dark</span></h1>
        <p className={styles.text}>We work on amazing</p>
        <button className={styles.sign_up}>Sign Up</button>


      </div>
      <div className={styles.main_right}>
        <h1>To The <br />Side</h1>
        <p className={styles.text}> projects for the world</p>
        <button className={styles.log_in}>Log In</button>
      </div>
      </div>

    </div>
    
    </>
  )
}

export default Home
