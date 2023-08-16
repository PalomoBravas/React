'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
import {JSX, useEffect, useState} from "react";
import cardImageUrl from '@/public/images/29CCWU6H.jpg'
import arrowImageUrl from '@/public/icon/arrow.svg'
import Like from "@/components/Like";

function Card(): JSX.Element {
    const postId = 11;
    const titlePost = 'RGB Mixer';
    const initLikeValue = 4;
    const [likeValue, setLikeValue] = useState(initLikeValue)
    const [yourLikeIt, setYourLikeIt] = useState(false)

    const setLike = () => {
        setYourLikeIt(!yourLikeIt)
        setLikeValue(!yourLikeIt ? likeValue + 1 : initLikeValue)
    }

    useEffect(() => {PatchRequest(postId, likeValue, yourLikeIt)}, [likeValue])

    const PatchRequest = (postId: number, likesValue: number, yourLikeIt: boolean) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/:${postId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: titlePost,
                postId: postId,
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
                src={cardImageUrl}
                width='500'
                height='300'
                alt='cover image'/>
            <section className={styles.headerCard}>
                <div className={styles.categoryRelease}>
                    <span className={styles.category}>Tools</span>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.release}>3 month ago</span>
                </div>
                <Like countLike={likeValue} yourLikeIt={yourLikeIt} setLike={setLike}/>
            </section>

            <section className={styles.contentCard}>
                <h2 className={styles.contentCardTitle}> {titlePost} </h2>
                <p className={styles.contentCardText}><Link href="https://nextjs.org/" className={styles.contentTextLink} >Lorem ipsum dolor sit amet</Link>, consectetur adipisicing elit.
                    Aliquam animi assumenda cumque, et eveniet facere hic incidunt maiores nam quam quasi rerum sed
                    sunt temporibus totam vitae, voluptas... </p>
            </section>

            <section className={styles.footerCard}>
                <span className={styles.timeRead}>3 minutes</span>
                <button className={styles.readButton}>
                    <span className={styles.readButtonText}>Read </span>
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


