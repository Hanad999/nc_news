import { useState } from "react";
import { fetchArticles } from "../../api";
import { Link } from "react-router-dom";
export default function Articles() {
  const [articles, setArticles] = useState([]);
  fetchArticles().then((response) => {
    setArticles(response);
  });
  return (
    <>
      <ol className="article-list">
        {articles.map((eachArticle) => {
          return (
            <li key={eachArticle.article_id} className="each-article">
              <img
                className="article-image"
                src={eachArticle.article_img_url}
                alt={eachArticle.title}
              />
              <h2 className="article-title">Title: {eachArticle.title}</h2>
              <h3 className="header for topic">Topic: {eachArticle.topic}</h3>
              <h4 className="article-created-at">
                Created: {eachArticle.created_at}
              </h4>
              <h5 className="article-votes">Votes: {eachArticle.votes}</h5>
              <h6 className="article-comment_count">
                Comment Count: {eachArticle.comment_count}
              </h6>
              <Link to={`/articles/${eachArticle.article_id}`} className="article-body">
                Read more
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
