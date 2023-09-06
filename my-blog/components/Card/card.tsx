import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'
import {JSX} from "react";
import arrowImageUrl from '@/public/icon/arrow.svg'


import LikeButton from "@/components/LikeButton";
import {CardProps} from "./card.props";

function Card({id, title, coverURL, category, text, initialLink, rating, data, yourLike}: CardProps): JSX.Element {

    return (
        <article className={styles.card}>
            <Image
                className={styles.coverImage}
                src={coverURL}
                width='500'
                height='300'
                alt='cover image'/>
            <div className={styles.headerCard}>
                <div className={styles.categoryRelease}>
                    <span className={styles.category}>{category}</span>
                    <span className={styles.release}>{data}</span>
                </div>
                <LikeButton id={id} initLikeValue={rating} like={yourLike}/>
            </div>

            <section className={styles.contentCard}>
                <h2 className={styles.contentCardTitle}> {title} </h2>
                <p className={styles.contentCardText}><Link href="https://nextjs.org/" className={styles.contentTextLink} >{initialLink}</Link>{text} </p>
            </section>

            <div className={styles.footerCard}>
                <span className={styles.timeRead}>{data}</span>
                <Link
                    href={'/post/2'}
                    className={styles.link}>
                    <button className={styles.readButton}>
                        <span className={styles.readButtonText}>Read</span>
                        <Image
                            src={arrowImageUrl}
                            width='20'
                            height='20'
                            alt='cover image'/>
                    </button>
                </Link>

            </div>

        </article>
    )
}

export default Card


