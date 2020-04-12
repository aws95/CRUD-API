const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        let posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({message: err});
    }
});


router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        let savedPost = await post;
        savedPost.save();
        res.json(savedPost);
    }
    catch (err) {
        res.json({message: err});
    }
});

//get specific post 

router.get('/:postId', async (req, res) => {
 
    try {
        let post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({message: err});
    }
});

//delete specific post 

router.delete('/:postId', async (req, res) => {
 
    try {
        let removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }
    catch (err) {
        res.json({message: err});
    }
});

//delete specific post 

router.patch('/:postId', async (req, res) => {
 
    try {
        let updatedPost = await Post.updateOne({_id: req.params.postId}, {$set:{title: req.body.title}});
        res.json(updatedPost);
    }
    catch (err) {
        res.json({message: err});
    }
});

module.exports = router;