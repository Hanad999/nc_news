import { useState } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../api";

export default function AddComments() {
  const { article_id } = useParams();
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  function handleChangeUser(event) {
    setUsername(event.target.value);
  }
  function handleChangeBody(event) {
    setBody(event.target.value);
  }
  function handleOnClick(event) {
    event.preventDefault();
    console.log('hellow')
    addComment(article_id, username, body).then((response) =>
      console.log(response)
    );
  }
  return (
    <>
      <div className="form-container">
        <form id="form">
          <label htmlFor="user-name">Username: </label>
          <input onChange={handleChangeUser} type="text" id="user-name" />
          <label htmlFor="added-comment">Comment: </label>
          <input onChange={handleChangeBody} type="text" id="added-comment" />
          <button onClick={handleOnClick} className="addcomment-btn">
            Add Comment
          </button>
        </form>
      </div>
    </>
  );
}
