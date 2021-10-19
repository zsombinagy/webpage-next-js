import { NextPage } from "next";
import styles from '../styles/write.module.sass'
import Link from "next/link";
import Arweave from "arweave"
import { useState } from "react";

class Blog {
    constructor(
        private id: number,
        private title: string,
        private author: string,
        private body: string
    ) {}
}

let blog: Blog[] =[];



const Write: NextPage = () => {
    const [isPending, setIsPending] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e: MouseEvent) =>{
        e.preventDefault();
        setIsPending(true);

        const post = new Arweave({
            host: 'arweave.net',
            port: 443,
            protocol: 'https'
          });

          let transaction = await post.createTransaction({
            data: body,
        });

        transaction.addTag('Content-Type', 'text/plain');
        transaction.addTag('App-Name', 'first-project');
        transaction.addTag('Blog-name', title);
        transaction.addTag('Blog-username', author);

        await post.transactions.sign(transaction);
        let uploader = await post.transactions.getUploader(transaction);

        while (!uploader.isComplete) {
            await uploader.uploadChunk();
            console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
        }
        setIsPending(false);
        setBody("");
        setAuthor("");
        setTitle("");





    }

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
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Please write a title..."  />
                <h2>Username</h2>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Please write a username..." />
                <h2>Blog Content</h2>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                 ></textarea>
                {!isPending && <button className={styles.submit} onClick={handleSubmit}>Post Blog</button>}
                {isPending && <button className={styles.submit} disabled>Adding Blog...</button>}
            </div>
        </div>

    )


}

export default Write