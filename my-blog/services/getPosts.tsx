import {API} from "@/api";

export default async function getPosts (countPosts = 100) {
    let url = countPosts!==0 && countPosts<100 ? `${API.post.get}?_limit=${countPosts}` : `${API.post.get}`
    console.log('getData ' + countPosts + url )
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Failed to fetch data ${url}`)
    }



    return res.json()
}

