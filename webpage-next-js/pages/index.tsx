import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import { useState } from "react"
import Link from "next/link"

const Home: NextPage = () => {

  const [active, setActive] = useState("")
  const [ off, setOff] = useState("")
  const [active2, setActive2] = useState("")
  const [ off2, setOff2] = useState("")
  const [active3, setActive3] = useState("")
  const [ off3, setOff3] = useState("")
  
  return (
    <>
    <div className={styles.page}>
      <div className={styles.navbar}>
          <img src="/logo.png" alt="logo" />
          <div className={styles.button}>
          <Link href="/"><a>Blog</a></Link>
          <Link href="/blog"><a>Forums</a></Link>
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
              <span className={styles.read_more_btn  + " " + off} onClick={ () => {
                  setActive(styles.active)
                  setOff(styles.off)

              }} >
              Read More...
              </span>
              <span className={styles.read_more  + " " + active}> Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste! </span>
            </p>
            <p className={styles.read_more + " " + active}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>

            <span className={styles.read_less_btn  + " " + active} onClick={ () => {
                  setActive("")
                  setOff("")
            }} >
              Read Less...
            </span>
            
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
              <span className={styles.read_more_btn  + " " + off2} onClick={ () => {
                  setActive2(styles.active2)
                  setOff2(styles.off2)

              }} >
              Read More...
              </span>
              <span className={styles.read_more  + " " + active2}> Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste! </span>
            </p>
            <p className={styles.read_more + " " + active2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>

            <span className={styles.read_less_btn  + " " + active2} onClick={ () => {
                  setActive2("")
                  setOff2("")
            }} >
              Read Less...
            </span>
            
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
              <span className={styles.read_more_btn  + " " + off3} onClick={ () => {
                  setActive3(styles.active3)
                  setOff3(styles.off3)

              }} >
              Read More...
              </span>
              <span className={styles.read_more  + " " + active3}> Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste! </span>
            </p>
            <p className={styles.read_more + " " + active3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>
            <p className={styles.read_more + " " + active3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
            </p>

            <span className={styles.read_less_btn  + " " + active3} onClick={ () => {
                  setActive3("")
                  setOff3("")
            }} >
              Read Less...
            </span>
            
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Home
