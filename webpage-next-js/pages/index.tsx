import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import { useState } from "react"
import Link from "next/link"

const Home: NextPage = () => {


  
  return (
    <>
    <div className={styles.page}>
      <div className={styles.navbar}>
          <img src="/logo.png" alt="logo" />
          <div className={styles.button}>
          <Link href="/"><a>Blog</a></Link>
          <Link href="/write"><a>Write</a></Link>
          <Link href="/"><a>Sign in</a></Link>

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
      <div className={styles.blogs}>
        <div className={styles.blog_1}>
          <div className={styles.blog_title}>
            <h1>Blog Title #1</h1>
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span >
              Read More...
              </span>
            </p>
            
            
          </div>
        </div>
      </div>


      <div className={styles.blogs}>
        <div className={styles.blog_1}>
          <div className={styles.blog_title}>
            <h1>Blog Title #2</h1>
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span >
              Read More...
              </span>
              </p>
            
          </div>
        </div>
      </div>
      <div className={styles.blogs}>
        <div className={styles.blog_1}>
          <div className={styles.blog_title}>
            <h1>Blog Title #3</h1>
          </div>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span >
              Read More...
              </span>
              </p>
              

            
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Home
