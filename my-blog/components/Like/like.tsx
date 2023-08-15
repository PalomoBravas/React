"use client"
import {LikeProps} from "./like.props";
import styles from './like.module.css'
import {JSX, useState} from "react";

export default function Like ({yourLikeIt = false, rating, setLike}: LikeProps): JSX.Element {
    const [buttonState, setButtonState] = useState(false)










    return <div className={styles.like_button}>
        <span>{rating}</span>
        <div className={yourLikeIt ? `${styles.circle} ${styles.active}` : styles.circle}></div>
    </div>



}