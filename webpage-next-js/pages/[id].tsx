import type { NextPage } from 'next'
import styles from '../styles/blog.module.sass'
import Link from 'next/link'

const blog: NextPage = () => {



    return (
        <>
            <div className={styles.page}>
                <div className={styles.navbar}>
                    <img src="/logo.png" alt="logo" />
                    <div className={styles.button}>
                        <Link href="/"><a>Blog</a></Link>
                        <Link href="/write"><a>write</a></Link>
                        <Link href="/"><a>Sign in</a></Link>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default blog