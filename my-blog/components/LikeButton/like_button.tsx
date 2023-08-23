"use client"
import {Like_buttonProps} from "./like_button.props";
import styles from './like_button.module.css'
import {JSX, useEffect, useState} from "react";
import LikeIcon from "@/components/Icons/like";
import PatchRequestService from "@/services/PatchRequestService";




export default function Like_button ({yourLikeIt = false, likeValue, id}: Like_buttonProps): JSX.Element {

    const [likeIt, setLikeIt] = useState(yourLikeIt)
    const [likeCount, setLikeValue] = useState(likeValue)

    useEffect(() => {
        likeIt ? setLikeValue(likeCount + 1) : setLikeValue(likeValue)
        PatchRequestService(id, likeCount, likeIt)
    }, [likeIt])

    const enter = () => {

    }
    const leave = () => {

    }

    const likeConstructor = (buttonState: boolean, countLike: number): JSX.Element => {
        return (
            <button className={ buttonState ? `${styles.like_button} ${styles.active}` : `${styles.like_button} ${styles.no_active}` }
                    onMouseEnter={() => enter()}
                    onMouseLeave={() => leave()}
                    onClick={() => setLikeIt(!likeIt)}>
                <span className={styles.count_like}>{countLike}</span>
                <LikeIcon/>
            </button>
        )
    }

    return likeConstructor(likeIt, likeValue)
}