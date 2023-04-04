
import React, { useState, useEffect } from "react";
import  '../Comments.css';
import axios from 'axios';



function Comments(props){

  const id=props.id;
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [commentSaved, setCommmentSaved] = useState([]);
  

  const errorMessage=handleInput(user, comment)
  function handleInput(user, comment){
 
  
    if(!user){
      return "Please enter your name and comment "
    } 
    if(!comment) {
      return "Please enter your  comment" ;
    } 
   
  }
  
  const  handleSubmit=  async (event)=>{
    event.preventDefault();
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
      });   
    }

  const url=`http://127.0.0.1:5000/api/comments/${id}`; 
  async function getData  (){
    const data = await fetch(url) 
      .then((data) => data.json()) 
      .then((data)=>{
        setCommmentSaved(data) 
      })
        
      .catch((error) => console.error(error))   
  }

  useEffect(()=>{
    
    getData();
  
  }, []);
  var date;
  return(
  
        <div className="container-comments"> 
          <div className="comment">
            
          {commentSaved.map((item) => (
            <div key={item._id} className="card-comment" >
            
              <p className="name"> {item.user}</p>
              <p className="date">{new Date(item.createdAt).toISOString().slice(0,10)}</p>
              <p> {item.comment}</p>
            </div>))}
          </div>
        
          <form onSubmit={handleSubmit} className="comment-form">
          <h4>{errorMessage}</h4>
       
          <input type="text" id="user" placeholder="Name"  value={user} onChange={(e) => setUser(e.target.value)}/>
          <label></label>
          <textarea id="comment"  placeholder="Message" value={comment} onChange={(e) => setComment(e.target.value)} />
       
          <button type="submit" disabled={errorMessage}>Post Comment</button>   
         
          </form>
       
        </div>


  );
} 
      
    

export default Comments;
