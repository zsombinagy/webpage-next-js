import type { NextPage } from 'next'
import styles from '../styles/blog.module.sass'

const blog: NextPage = () => {
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
                    <div className={styles.blog_title}>
                        <h1>Blog Title #1</h1>
                    </div>
                    <div className={styles.author}>
                        <img src="/profile.png" alt="profile" />
                    </div>
                    <h4>@zsombornagy</h4>
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