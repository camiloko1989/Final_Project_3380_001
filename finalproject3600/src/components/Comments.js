import React, { useState, useEffect } from "react";
import '../Comments.css';
import axios from 'axios';



function Comments(props) {
  const id = props.id;
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [commentSaved, setCommmentSaved] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const errorMessage=handleInput(user, comment)
  function handleInput(user, comment){
 
  
    if(!user && !comment){
      return "Please enter the following information: name and comment ";
    } 
    if (!user && comment !=""){
    return " Please enter the followin information: name  ";
    }
    if (user!="" && !comment){
    return " Please enter the following information: comment";
    }  
  }
  
  const  handleSubmit=  async (event)=>{
    event.preventDefault();
    setShowForm(false); 
    handleInput(user, comment);
    const data={
      shelterId:id,
      user:user,
      comment:comment,
      
    }
      axios
      .post('http://127.0.0.1:5000/api/comments', data)
      .then(res=>{
        setComment("")
        setUser("")
        console.log("success")
        getData();
        window.alert("¡Thanks for your comments!");

      });   
    }

  const url = `http://127.0.0.1:5000/api/comments/${id}`;
  async function getData  () {
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

  return(
  
    <div className="container-comments"> 
    <button className="button-form" onClick={() => setShowForm(true)}>Add a Comment</button>
      {showForm && (

      <form onSubmit={handleSubmit} className="comment-form">
      
      <p className="message"> <strong>{errorMessage}</strong></p> 
        <input type="text" id="user" placeholder="Name"  value={user} onChange={(e) => setUser(e.target.value)}/>
        <br/>
        <br/>
        <textarea id="comment"  placeholder="Message" value={comment} onChange={(e) => setComment(e.target.value)} />
       
        <button type="submit" disabled={errorMessage}>Post Comment</button>  
      
      </form>
      
      )}
    
      <div className="comment">
      {commentSaved.map((item) => (
        <div key={item._id} className="card-comment" >
          <div className="container-user">
            <img className ="avatar "src="/images/user_avatar.png"  width="50px"/>
            <p className="name"> {item.user}</p>
            <p className="date">{new Date(item.createdAt).toISOString().slice(0,10)}</p>
          </div> 
          <p className="user-comment"> {item.comment}</p>
        
        </div>))}
      </div> 
    </div>


);
} 
export default Comments;
