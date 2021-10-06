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
                <div className={styles.main}>
                    <div className={styles.blog_title}>
                        <h1>Blog Title </h1>
                    </div>
                    <div className={styles.author}>
                        <img src="/profile.png" alt="profile" />
                        <h4>@zsombornagy</h4>
                    </div>
                    
                    <div className={styles.text}>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                        </p>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                        </p>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                        </p>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa sequi architecto, fugiat quas id dignissimos iste illum mollitia voluptas consequuntur, excepturi quia facilis aliquid unde obcaecati! Dolorem, eveniet iste!
                        </p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default blog