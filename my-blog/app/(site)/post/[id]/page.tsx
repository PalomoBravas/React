
import layout from './layout.module.css'
import Article from "@/components/Article";
import {Metadata} from "next";




export const metadata: Metadata = {
    title: 'about',
    description: 'about',
}
export default function PostPage({ params }: { params: { id: string } }) {
    return (
        <main className={layout.main}>
            <Article id={params.id}/>
        </main>
    )
}
