import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Account</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/Topics">Topics</Link>
        <Link to="/users">Users</Link>
        <Link to="/account">Account</Link>
      </nav>
    </>
  );
}
