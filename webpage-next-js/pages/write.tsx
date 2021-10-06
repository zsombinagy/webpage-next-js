import { NextPage } from "next";
import styles from '../styles/write.module.sass'
import Link from "next/link";

const Write: NextPage = () => {

    return (
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
                <h1>Write a new blog</h1>
                <h2>Blog Title</h2>
                <input type="text" placeholder="Please write a title..." />
                <h2>Username</h2>
                <input type="text" placeholder="Please write a username..." />
                <h2>Blog Content</h2>
                <textarea ></textarea>
                <button className={styles.submit}>Post Blog</button>
            </div>
        </div>

    )


}

export default Write