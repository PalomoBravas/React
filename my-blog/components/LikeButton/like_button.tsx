"use client"
import {Like_buttonProps} from "./like_button.props";
import styles from './like_button.module.css'
import {JSX, useState} from "react";
import patchRequestService from "@/services/PatchRequestService";
import classNames from "classnames";
import LikeIcon from "@/components/likeIcon";



export default function Like_button ({like = false, initLikeValue, id}: Like_buttonProps): JSX.Element {
    const [isLiked, setIsLiked] = useState(like)
    const [likeValue, setLikeValue] = useState(initLikeValue)


    async function click ()  {


        setIsLiked(!isLiked)
        isLiked ? setLikeValue(likeValue - 1 ) : setLikeValue(likeValue + 1)
        await patchRequestService(id, isLiked ? likeValue - 1 : likeValue + 1,  !isLiked)
    }

    return (
        <button

            className={classNames(styles.like_button, isLiked && styles.active)}
            onClick={click}>
            <span className={styles.count_like}>{likeValue}</span>
            <LikeIcon/>
        </button>
    )
}
