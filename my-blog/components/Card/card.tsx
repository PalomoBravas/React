'use client'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
import LikeButton from 'components/LikeButton/like-button'
import {JSX, useState} from "react";
import cardImageUrl from '@/public/images/29CCWU6H.jpg'
import arrowImageUrl from '@/public/icon/arrow.svg'
import Like from "@/components/Like";



function Card(): JSX.Element {
    const [likeValue, setLikeValue] = useState(5)
    const setLike = () => {
        setLikeValue(likeValue + 1)
        console.log(likeValue)
    }

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
                <LikeButton countLike={5} pressed={true}/>
            </section>

            <section className={styles.contentCard}>
                <h2 className={styles.contentCardTitle}> RGB Mixer </h2>
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
            <section className={styles.tmp}>
                <Like rating={likeValue} yourLikeIt={true} setLike={setLike}/>
            </section>

        </article>
    )
}

export default Card


