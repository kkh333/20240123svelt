export async function load({ fetch, params }) {
    let res = await fetch("https://dummyjson.com/products/" + params.articleId)
    let result = await res.json()

    return result
}