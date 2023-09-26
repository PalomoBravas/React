import style from './article.module.css'
import {JSX} from "react";
import getPost from "@/services/getPostById";
import coverImageUrl from "@/public/images/post/7FXO8O6T.jpg"
import Image from "next/image";
import data from "@/public/post/post.json"
import TextPost from "@/components/TextPost";
import LikeButton from "@/components/LikeButton";
async function Article({id}): Promise<JSX.Element> {

    const post = await getPost(id)

    return (
        <article className={style.article}>
            <div className={style.header}>
                <h2 className={style.postTitle}>{post.title}</h2>
                <div className={style.subtitle}> 
                    <span>категория</span> 
                    <span>дата</span>
                    <span>сколько читать</span>
                    <span>сколько лайков</span>
                </div>
            </div>

            <Image className={style.coverImage} src={coverImageUrl} alt={"cover image"}></Image>

            <TextPost path={data.textPath}/>
            <div className={style.likeBlock}>
                <span>Like? Press</span>
                <div className={style.icon}><LikeButton id={2} like={false} initLikeValue={5}/></div>
            </div>
            <section className={style.comments}>
                <h2>коментарии</h2>
                <div className={style.person}><span className={style.name}>{"Василий Пупкин"}</span><span>{"email@gmail.com"}</span></div>
                <p className={style.commentText}>{post.body}</p>
            </section>
            <section className={style.form}>

                <div>имя</div>
                <div>text</div>
                <div>send</div>
            </section>

            <div className={style.body}></div>
        </article>
    )
}

export default Article


