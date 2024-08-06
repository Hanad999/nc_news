import axios from "axios";

const api = axios.create({
  baseURL: "https://black-hole-bwuf.onrender.com/api",
});
console.log('hello')
export const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    console.log(response)
    return response.data.articles;
  });
};
