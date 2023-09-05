import Card from "../components/Card";
import main from './main.module.css'
import layout from './layout.module.css'
import {JSX} from "React";
import data from './api.json'
import {CardProps} from "@/components/Card/card.props";
import PostList from "@/components/PostList";


export default function Home() {
    const posts = data.map((post:CardProps): JSX.Element => {
        return <li key={post.id}>
          <Card {...post} />
      </li>
     })

    console.log()

    return (
        <main className={layout.main}>

            <ul className={main.content}>
                {posts}
            </ul>

            <PostList count={50}/>

        </main>
  )
}
