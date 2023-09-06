import style from './article.module.css'
import {JSX} from "react";
import getPost from "@/services/GetPost";






async function Article({id}): Promise<JSX.Element> {

    const post = await getPost(id)

    return (
        <article className={style.article}>
            <span></span>
            <h2 className={style.postTitle}>{post.title}</h2>

            <div className={style.body}>{post.body}</div>
        </article>
    )
}

export default Article


