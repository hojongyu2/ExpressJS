var express = require('express');
var router = express.Router();

var blogs = require("../public/sampleBlogs");
const blogPosts = blogs.blogPosts;

router.get('/', function (req, res, next) {
    res.json(blogPosts)
});

router.get('/all', (req, res) => { 
    const sort = req.query.sort
    
    //sort(function(a,b){ 
    //     return b - a
    // }) sort function that return it as descending order
    // a - b is for ascending order

    if (sort === 'desc'){
        blogPosts.sort(function(a,b){
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        res.json(blogPosts)
        
    }else if (sort === 'asc'){
        blogPosts.sort(function(a,b){
            return new Date(a.createdAt) - new Date(b.createdAt);
        });
        res.json(blogPosts)
    }
    //all?sort=desc
});

router.get('/:blogId', function (req, res, next) {
    const blogId = req.params.blogId;
    res.json(findBlogId(blogId))
});

function findBlogId (blogId){
    const foundBlog = blogPosts.find((blog) => {
        return blog.id === blogId
    })
    return foundBlog;
}



module.exports = router;