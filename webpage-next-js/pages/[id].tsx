import type { NextPage } from 'next'
import styles from '../styles/blog.module.sass'
import Link from 'next/link'
import { Blogs } from '.'

const blog: NextPage = () => {
    console.log(Blogs[0].id)



    return (
        <>
            <div className={styles.page}>
                <div className={styles.navbar}>
                    <img src="/logo.png" alt="logo" />
                    <div className={styles.button}>
                        <Link href="/"><a>Blog</a></Link>
                        <Link href="/write"><a>write</a></Link>
                        <Link href="/"><a>Sign in</a></Link>

                    
                        
                    }

                

                    </div>
                </div>
            </div>
        </>
    )
}

export default blog