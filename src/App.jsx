import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";
import AddComments from "./components/AddComments";
import Users from "./components/Users";
import Search from "./components/Search";
import Topics from "./components/Topics";
import Account from "./components/Account";
function App() {
  const [search, setSearch] = useState();
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<Comments />} />
          <Route
            path="/articles/:article_id/addcomment"
            element={<AddComments />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/account" element={<Account />} />
          <Route path="/articles/search" element={<Search />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
