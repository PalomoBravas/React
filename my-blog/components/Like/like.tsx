"use client"
import {LikeProps} from "./like.props";
import styles from './like.module.css'
import {JSX, useState} from "react";
import likeIconGrayURL from "@/public/icon/likeGray.svg";
import likeIconRedURL from "@/public/icon/likeRed.svg";
import Image from "next/image";


export default function Like ({yourLikeIt = false, countLike, setLike}: LikeProps): JSX.Element {
    const [buttonState, setButtonState] = useState(yourLikeIt)
    const likeConstructor = (buttonState: boolean, countLike: number): JSX.Element => {
        return (
            <button className={styles.like_button}
                 onMouseEnter={() => setButtonState(!buttonState)}
                 onMouseLeave={() => setButtonState(yourLikeIt)}
                 onClick={() => setLike()}>
                <span className={styles.count_like}>{countLike}</span>
                <Image
                    src={buttonState ? likeIconRedURL : likeIconGrayURL}
                    width='15'
                    height='15'
                    alt='like icon'/>
            </button>
        )
    }

    return likeConstructor(buttonState, countLike)
}