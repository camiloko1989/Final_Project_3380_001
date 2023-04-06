import React, { useState, useEffect } from "react";
import "../Comments.css";
import axios from "axios";

function Comments(props) {
  const id = props.id;
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [commentSaved, setCommmentSaved] = useState([]);
  // const [newComment, setNewComment] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      shelterId: id,
      user: user,
      comment: comment,
    };
    axios.post("http://127.0.0.1:5000/api/comments", data).then((res) => {
      setComment("");
      setUser("");
      console.log("success");
      getData();
    });
  };

  const url = `http://127.0.0.1:5000/api/comments/${id}`;
  async function getData() {
    const data = await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setCommmentSaved(data);
      })

      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container-comments">
        <div className="comment">
          {commentSaved.map((item) => (
            <div key={item._id} className="card-comment">
              <p> {item.user}</p>
              <p> {item.comment}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="comment-form">
            <label htmlFor="user">Name:</label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Send comment</button>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="comment">
          {commentSaved.map((item) => (
            <div key={item._id} className="card-comment">
              <p> {item.user}</p>
              <p> {item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
