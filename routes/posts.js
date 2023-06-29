const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// Save posts
router.post('/post/save', async (req, res) => {
    try {
      let newPost = new Posts(req.body);
      await newPost.save();
      return res.status(200).json({
        success: "Posts saved successfully",
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  });
  

//get posts

router.get('/posts', (req, res) => {
    Posts.find()
      .exec()
      .then((posts) => {
        return res.status(200).json({
          success: true,
          existingPosts: posts
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err
        });
      });
  });

//update posts

router.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      }
    )
      .exec()
      .then(() => {
        return res.status(200).json({
          success: "Updated successfully"
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err
        });
      });
  });

//delete post

router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id)
      .exec()
      .then((deletedPost) => {
        return res.json({
          message: "Delete successful",
          deletedPost
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: "Delete unsuccessful",
          error: err
        });
      });
  });
  
  module.exports = router;