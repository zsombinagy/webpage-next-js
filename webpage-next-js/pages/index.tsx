import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Link from "next/link"
import { run } from "ar-gql";

const getTagsValue = (name: string, tags ) => {
  return tags.find(tag => tag.name === name).value
  
}



export const getStaticProps = async () => {
  const data = await run(
  `  query {
      transactions(tags: { name: "App-Name", values: "first-project" }) {
        edges {
          node {
            id
            tags {
              name
              value
            }
          }
        }
      }
    }`
);


return {
  props: {blogs: data.data.transactions.edges}
}
}


const Home: NextPage = ({blogs}) => {
  


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
        {blogs.map(blog =>
        
         
        (
          
          <div key={blog.node.id} className={styles.blog}>
            <div className={styles.blog_title}>Blog Title<span> #{getTagsValue("Blog-name", blog.node.tags)}</span></div>
            <div className={styles.blog_details}>@{getTagsValue("Blog-username", blog.node.tags)} <Link href={`/blog/${blog.node.id}`} ><a >Read More</a></Link></div>
          </div>

        ))}
      </div>



    </div>
    
    </>
  )
}

export default Home
