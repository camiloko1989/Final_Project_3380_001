
import React, { useState, useEffect } from "react";
import Commments  from '../Comments.css';
import Details  from './Details.js';
import axios from 'axios';
//import { param } from "../../../backend/routes/commentRouter";

function Comments(props){

        const id=props.id;
        const [user, setUser] = useState("");
        const [comment, setComment] = useState("");
        const [commentSaved, setCommmetSaved] = useState([]);
        
        const  handleSubmit=  async (event)=>{
          event.preventDefault();
          
          const data={
            shelterId:id,
            user:user,
            comment:comment

          }     
          axios
            .post('http://127.0.0.1:5000/api/comments', data)
            .then(console.log("sucesss!!!!"));

          setUser("");
          setComment("");
           
          
      }

      useEffect(()=>{
        const url=`http://127.0.0.1:5000/api/comments/${id}`; 
        async function getData(){
          const data = await fetch(url) 
            .then((data) => data.json()) 
              setCommmetSaved(data) 
            .catch((error) => console.error(error))   
        }
       getData();
     
      }, []);
      
    
        return(
        

        <div className="container"> 
          <div className="comment">
          {commentSaved.map((item) => (
          <div key={item._id} className="card-comment" >
          <p> {item.user}</p>
          <p> {item.comment}</p>
          </div>))}
        
          <form onSubmit={handleSubmit} className="comment-form">
          <label htmlFor="user">Name:</label>
          <input type="text" id="user"   value={user} onChange={(e) => setUser(e.target.value)}/>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment"  value={comment} onChange={(e) => setComment(e.target.value)} />
          <button type="submit">Send comment</button>
          </form>
        </div>
        </div>

         
            
        );

        } 
      
    

export default Comments;
