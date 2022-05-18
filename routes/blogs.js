var express = require('express');
var router = express.Router();

var blogs = require("../public/sampleBlogs");
const blogPosts = blogs.blogPosts;

router.get('/', function (req, res, next) {
    res.json(blogPosts)
});

router.get('/all', (req, res) => { 
    const sort = req.query.sort
    
    if (sort === 'desc'){
        blogPosts.sort(function(a,b){
            return Date.parse(new Date(b.createdAt)) - Date.parse(new Date(a.createdAt));
        })
        res.json(blogPosts)
    }else if (sort === 'asc'){
        blogPosts.sort(function(a,b){
            return Date.parse(new Date(a.createdAt)) - Date.parse(new Date(b.createdAt));
        });
        res.json(blogPosts)
    }
    
});
//all?sort=desc
router.get('/:blogId', function (req, res, next) {
    const blogId = req.params.blogId;
    const foundBlog = blogPosts[blogId];
    res.json(foundBlog)
});





module.exports = router;