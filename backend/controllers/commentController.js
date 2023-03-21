const asyncHandler = require("express-async-handler");
const Facility = require("../models/facilityModel");
const Comment = require("../models/commentModel");
const express = require('express');


const getComment= asyncHandler(async (req, res) => {
  //const shelterId=req.params.shelterId
  const comment = await Comment.find();
  res.status(200).json(comment);
});

const getComments = asyncHandler(async (req, res) => {
  const shelterId=req.params.id
  //Comment.find(req.params.shelterId)
  //console.log(req.params)
  const comment = await Comment.find({shelterId:shelterId})

  //.then((comment) => res.json(comment))
  .catch((err) => res.status(400).json('Error: ' + err));
 // const comment = await Comment.find();
 //console.log(comment)
  res.status(201).json(comment);
});

// @desc    Set facility
// @route   POST /api/facility
// @access  Public
const setComment = asyncHandler(async (req, res) => {

  /*   if (!req.body.comment) {
    // need to add back other fields after testing
    // res.status(400).json({ message: "Please add a text field" }); // bad req
    res.status(400);
    // express error handler
    throw new Error("Please enter your name");
  }*/
    
    shelterId=req.body.shelterId,
    user=req.body.user,
    comment=req.body.comment
    const data=new Comment({
    shelterId,user,comment

    })

    console.log(data);
   
    
    const newComment = await Comment.create({
    shelterId,user,comment
      
    });

    console.log(newComment);
    newComment
    .save()
    .then(() => res.status(201).json('Activity added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
  
});



module.exports = {
  getComment,
  setComment,
  getComments
 // deleteFacility,
};
