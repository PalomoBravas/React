import {API} from "@/api";

export default async function getPostById (id) {
    let url = `${API.post.get}/${id}`
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Failed to fetch data ${url}`)
    }
    return res.json()
}