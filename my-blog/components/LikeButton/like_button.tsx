"use client"
import {Like_buttonProps} from "./like_button.props";
import styles from './like_button.module.css'
import {JSX, useEffect, useState} from "react";
import LikeIcon from "@/components/Icons/like";
import patchRequestService from "@/services/PatchRequestService";
import classNames from "classnames";

export default function Like_button ({like = false, initLikeValue, id}: Like_buttonProps): JSX.Element {
    const [mount, setMount] = useState(false)
    const [youLike, setYouLike] = useState(like)
    const [likeValue, setLikeValue] = useState(initLikeValue)

    useEffect(() => {
        if (mount) {
           patchRequestService(id, likeValue, !youLike)
        }
    }, [likeValue])


    const click = () => {
        setMount(true)
        setYouLike(!youLike)
        youLike ? setLikeValue(likeValue + 1) : setLikeValue(likeValue - 1)
    }

    const likeConstructor = (buttonState: unknown, countLike: number): JSX.Element => {
        const btnActive = classNames(styles.like_button, styles.active)
        const btn = classNames(styles.like_button, styles.no_active)
        return (
            <button
                className={ buttonState ? btnActive : btn }
                onClick={click}>
                <span className={styles.count_like}>{countLike}</span>
                <LikeIcon/>
            </button>
        )
    }

    return likeConstructor(youLike, likeValue)
}
