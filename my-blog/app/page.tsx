"use client"
import Card from "../components/Card";
import main from './main.module.css'
import {JSX} from "React";
import data from './api.json'


export default function Home() {
    const posts = data.map((post:object): JSX.Element => {

      return <li key={post.id}>
          <Card
              postId={post.id}
              titlePost={post.title}
              cover={post.cover}
              textPost={post.text}
              initialLinkPost={post.initialLinkPost}
              category={post.category}
              data={post.data}
              rating={post.rating}
              yourLike={post.yourLike}
          />
      </li>
  })



  return (
    <main className={main.container}>
        <ul className={main.content}>
            {posts}
        </ul>
    </main>
  )
}
