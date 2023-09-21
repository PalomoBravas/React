
import getPosts from "@/services/getPosts";
import {JSX} from "react";
import {PostProps} from './postList.props';
import styles from './postList.module.css'
import Image from "next/image";
import arrowImageUrl from "@/public/icon/arrow.svg";
import Link from "next/link";


export default async function PostList ({count}:number):Promise<JSX.Element> {
    const postsArr = await getPosts(count)


    const posts = postsArr.map((post:PostProps): JSX.Element => {
        return <li key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.body}>{post.body}</p>
            <Link
                href={`/post/${post.id}`}
                className={styles.link}>
                <div className={styles.readButton}>
                    <span className={styles.readButtonText}>Read</span>
                    <Image
                        src={arrowImageUrl}
                        width='20'
                        height='20'
                        alt='cover image'/>
                </div>
            </Link>
        </li>
    })



    return <ul className={styles.postList}>
        {posts}
    </ul>

}
