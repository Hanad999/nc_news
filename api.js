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
