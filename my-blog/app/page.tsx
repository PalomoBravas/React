import Card from "../components/Card";
import main from './main.module.css'
import {JSX} from "React";
import data from './api.json'
import {CardProps} from "@/components/Card/card.props";


export default function Home() {
    const posts = data.map((post:CardProps): JSX.Element => {
        return <li key={post.id}>
          <Card {...post} />
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
