import type { NextPage } from 'next'
import styles from '../../styles/blog.module.sass'
import Link from 'next/link'
import { run } from 'ar-gql'
import Arweave from 'arweave';





const getTagsValue = (name: string, tags ) => {
    return tags.find(tag => tag.name === name).value
    
  }

export const getStaticProps = async ({params:{id}}) => {
    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https'
      });
    const data = await arweave.transactions.getData(id, {decode: true, string: true})
    const blogData = await run(
    
    

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
        props: {data, blog: blogData.data.transaction}

    }
}

export async function getStaticPaths() {

    return {
        paths: [], 
        fallback: 'blocking'
    }
}


const blog: NextPage = ({blog, data}) => {



    return (
        <>
        {console.log(blog)}
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
                        <p>{data}</p>
                </div>
            </div>
        </>
    )
}

export default blog