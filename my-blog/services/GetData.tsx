import {API} from "@/api";

export default async function getData (countPosts = 100) {
    let url = countPosts!==0 && countPosts<100 ? `${API.post.getLimit}${countPosts}` : `${API.post.getAll}`
    console.log('getData ' + countPosts + url )
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Failed to fetch data ${url}`)
    }



    return res.json()
}

