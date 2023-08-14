import styles from './like-button.module.css';
import likeIconGrayURL from "@/public/icon/likeGray.svg";
import likeIconRedURL from "@/public/icon/likeRed.svg";
import {JSX} from "react";
import LikeButtonProps from "./like-button.props";
import Image from 'next/image'


const LikeButton = ({countLike, pressed}: LikeButtonProps):JSX.Element => {
    return (
        <button className={styles.likeButton}>
            <span className={styles.countLike}> { countLike } </span>
            <Image
                src={pressed ? likeIconRedURL : likeIconGrayURL}
                width='15'
                height='15'
                alt='like icon'/>

        </button>
    )
}
export default LikeButton