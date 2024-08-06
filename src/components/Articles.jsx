import { fetchArticles } from "../../api"

export default function Articles(){
    fetchArticles().then((response) => {console.log(response)})
    return (
        <>
        <p>Articles</p>
        </>
    )
}