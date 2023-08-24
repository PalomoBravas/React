"use client"
import {Like_buttonProps} from "./like_button.props";
import styles from './like_button.module.css'
import {JSX, useEffect, useState} from "react";
import LikeIcon from "@/components/Icons/like";
import PatchRequestService from "@/services/PatchRequestService";

export default function Like_button ({like = false, initLikeValue, id}: Like_buttonProps): JSX.Element {
    const [mount, setMount] = useState(false)
    const [youLike, setYouLike] = useState(like)
    const [likeValue, setLikeValue] = useState(initLikeValue)

    useEffect(() => {
        if (mount) {
           PatchRequestService(id, likeValue, !youLike)
        }
    }, [likeValue])

    const enter = () => {
        setYouLike(!youLike)
    }
    const leave = () => {
        setYouLike(!youLike)
    }

    const click = () => {
        setMount(true)
        setYouLike(!youLike)
        youLike ? setLikeValue(likeValue + 1) : setLikeValue(likeValue - 1)
    }

    const likeConstructor = (buttonState: unknown, countLike: number): JSX.Element => {
        return (
            <button className={ buttonState ? `${styles.like_button} ${styles.active}` : `${styles.like_button} ${styles.no_active}` }
                    onMouseEnter={() => enter()}
                    onMouseLeave={() => leave()}
                    onClick={() => click()}>
                <span className={styles.count_like}>{countLike}</span>
                <LikeIcon/>
            </button>
        )
    }

    return likeConstructor(youLike, likeValue)
}
