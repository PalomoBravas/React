import styles from './like-button.module.css';
import LikeButtonIcon from "../SVG-Icons/like";
import {JSX} from "react";
import LikeButtonProps from "like-button.props";

const LikeButton = ({countLike, pressed}: LikeButtonProps):JSX.Element => {
    return (
        <button className={styles.likeButton}>
            <span className={styles.countLike}> { countLike } </span>
            <LikeButtonIcon color = {pressed ? "red" : "gray"}/>

        </button>
    )
}
export default LikeButton