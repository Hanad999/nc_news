import { Outlet, useParams } from "react-router-dom";
import { fetchAllComments } from "../../api";
import { Link } from "react-router-dom";
import Article from "./Article";
import { useState } from "react";

export default function Comments() {
  const [comments, setcomments] = useState([]);
  const { article_id } = useParams();
  fetchAllComments(article_id).then((response) => {
    setcomments(response);
  });
  return (
    <>
      <section className="comment-container">
        <h1 className="comment-header">Comments</h1>
        <ol className="comment-list">
          {comments.map((eachComment) => {
            return (
              <li key={eachComment.comment_id} className="each-article">
                <p className="comment-body"> {eachComment.body}</p>
                <h4 className="comment-author">Author: {eachComment.author}</h4>
                <h5 className="comment-created-at">
                  Created: {eachComment.created_at}
                </h5>
                <h6 className="comment-votes">Votes: {eachComment.votes}</h6>
              </li>
            );
          })}
        </ol>
        <Link to={`/articles/${article_id}/comments/addcomment`} className="add-comment">
          Add comment
        </Link>
        <Outlet/>
      </section>
    </>
  );
}
