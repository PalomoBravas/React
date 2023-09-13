"use client"
import {Like_buttonProps} from "./like_button.props";
import styles from './like_button.module.css'
import {JSX, useState} from "react";
import patchRequestService from "@/services/PatchRequestService";
import classNames from "classnames";



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

            {/*я не понимаю как импортировать сюда простой svg, знаю как компонент, знаю как через image, я запутался как правильно,
            мне же нужно вставить его в код именно как <svg>*/}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width='13'
                height='13'
                fill='#aaa'>
                <path
                    fillRule="evenodd"
                    d="M6.417 1.3A1.833 1.833 0 0 1 8.254.715l.032.008a1.833 1.833 0 0 1 1.08 2.795L8.268 5.167h2.106A1.833 1.833 0 0 1 12.17 7.36l-.8 4a1.833 1.833 0 0 1-1.797 1.473H.667a.5.5 0 0 1-.5-.5V5.667a.5.5 0 0 1 .5-.5h2.436L6.417 1.3ZM2.833 6.167H1.167v5.666h1.666V6.167Zm1 5.666h5.74c.398 0 .74-.28.818-.67l.8-4a.833.833 0 0 0-.817-.996h-3.04a.5.5 0 0 1-.417-.778l1.617-2.425a.833.833 0 0 0-.49-1.271l-.033-.008a.833.833 0 0 0-.834.266l-3.344 3.9v5.982Z"
                    clipRule="evenodd"/>
            </svg>



        </button>
    )
}
