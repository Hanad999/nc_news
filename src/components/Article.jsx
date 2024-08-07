import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../api";
import { useState } from "react";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  fetchArticleById(article_id).then((response) => setArticle(response));
  return (
    <>
      <section className="each-article-card">
        <img
          className="each-article-image"
          src={article.article_img_url}
          alt={article.title}
        />
        <h2 className="each-article-title">Title: {article.title}</h2>
        <p className="each-article-body">{article.body}</p>
        <h3 className="each-article-topic">Topic: {article.topic}</h3>
        <h4 className="each-article-created-at">
          Created: {article.created_at}
        </h4>
        <h5 className="each-article-votes">Votes: {article.votes}</h5>
        <h6 className="each-article-comment_count">
          Comment Count: {article.comment_count}
        </h6>
      </section>
    </>
  );
}
