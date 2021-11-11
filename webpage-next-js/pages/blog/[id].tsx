import type { NextPage } from 'next'
import styles from '../../styles/blog.module.sass'
import Link from 'next/link'
import { run } from 'ar-gql'

const getTagsValue = (name: string, tags ) => {
    return tags.find(tag => tag.name === name).value
    
  }

export const getStaticProps = async ({params:{id}}) => {
    const data = await run(
`        query {
            transaction(id: "${id}") {
              id
              tags {
                name
                value
              }
            }
          }`
    )


    return  {
        props: {blog: data.data.transaction}
    }
}

export async function getStaticPaths() {

    return {
        paths: [], 
        fallback: 'blocking'
    }
}

const blog: NextPage = ({blog}) => {



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
                {console.log(blog)}
                <div className={styles.main}>
                    <div className={styles.blog_title}>{getTagsValue("Blog-name", blog.tags)}</div>
                    <div className={styles.blog_author}>
                        <img src="/profile.png" alt="profile" />
                        <p>@{getTagsValue("Blog-username", blog.tags)}</p>
                        
                        </div>
                </div>
            </div>
        </>
    )
}

export default blog