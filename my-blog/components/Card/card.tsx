'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
import {JSX, useEffect, useState} from "react";
import arrowImageUrl from '@/public/icon/arrow.svg'
import coverUrl from '@/public/images/29CCWU6H.jpg'
import Like from "@/components/Like";
import {CardProps} from "./card.props";

function Card({postId, titlePost, category, textPost, initialLinkPost, rating, data, yourLike}: CardProps): JSX.Element {
    const id = postId;
    const title = titlePost;
    const initLikeValue = rating;
    const postCategory = category;
    const dataPost = data;
    const [likeValue, setLikeValue] = useState(initLikeValue)
    const [yourLikeIt, setYourLikeIt] = useState(yourLike)
    console.log(postCategory)
    const setLike = () => {
        setYourLikeIt(!yourLikeIt)
        setLikeValue(!yourLikeIt ? likeValue + 1 : initLikeValue)
    }

    useEffect(() => {PatchRequest(postId, likeValue, yourLikeIt)}, [likeValue])

    const PatchRequest = (postId: number, likesValue: number, yourLikeIt: boolean) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/:${postId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                postId: id,
                likeValue: likesValue,
                yourLikeIt: yourLikeIt
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    };

    return (
        <article className={styles.card}>
            <Image
                className={styles.coverImage}
                src={coverUrl}
                width='500'
                height='300'
                alt='cover image'/>
            <section className={styles.headerCard}>
                <div className={styles.categoryRelease}>
                    <span className={styles.category}>{postCategory}</span>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.release}>{dataPost}</span>
                </div>
                <Like countLike={likeValue} yourLikeIt={yourLikeIt} setLike={setLike}/>
            </section>

            <section className={styles.contentCard}>
                <h2 className={styles.contentCardTitle}> {titlePost} </h2>
                <p className={styles.contentCardText}><Link href="https://nextjs.org/" className={styles.contentTextLink} >{initialLinkPost}</Link>{textPost} </p>
            </section>

            <section className={styles.footerCard}>
                <span className={styles.timeRead}>{dataPost}</span>
                <button className={styles.readButton}>
                    <span className={styles.readButtonText}>Read</span>
                    <Image
                        src={arrowImageUrl}
                        width='20'
                        height='20'
                        alt='cover image'/>
                </button>
            </section>

        </article>
    )
}

export default Card


