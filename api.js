import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-ida7.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

export const fetchAllComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const addVote = (article_id) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((response) => response.data.newlyUpdated.votes);
};

export const addComment = (article_id, username, body) => {
  const newComment = {
    username: username,
    body: body,
  };
  console.log(article_id, username, body);
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response) => response).catch((error) => error)
};
