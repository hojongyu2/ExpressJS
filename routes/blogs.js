var express = require('express');
var router = express.Router();

var blogs = require("../public/sampleBlogs");
const blogPosts = blogs.blogPosts;


/*
CRUD APP
    Create - POST
    Read - GET
    Update - PUT
    Delete - DELETE
*/

router.get('/', function (req, res, next) {
    res.json(blogPosts)
});

router.get('/all', (req, res, next) => { 
    const sort = req.query.sort;
    
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
    res.json(blogPosts)
    //all?sort=desc
});


router.get('/singleBlog/:blogId', function (req, res, next) {
    const blogId = req.params.blogId;
    res.json(findBlogId(blogId))
});

function findBlogId (blogId){
    const foundBlog = blogPosts.find((blog) => {
        return blog.id === blogId
    })
    return foundBlog;
};

router.get('/postblog', (req, res, next) => {
    res.render('postBlog')
});
//when click submit, it will store it's value as body

router.post('/submit', (req, res, next) => {
    console.log(req.body)
    const today = new Date()
    const newPost = {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        createdAt: today.toISOString(),
        id: String(blogs.blogPosts.length + 1)
    }

    blogs.blogPosts.push(newPost);
    console.log(blogs.blogPosts);

    res.send('ok')

});

router.get('/displayblogs', (req, res, next) => {
    res.render('displayBlogs')
});

router.get('/displaysingleblog', (req, res, next) => {
    res.render('displaySingleBlog')
});


router.delete('/deletesingleblog/:blogId', (req, res, next) => {
    const blogDelete = req.params.blogId;

    for (let i = 0; i <blogPosts.length; i++){
        let blog = blogPosts[i];
        if (blog.id = blogDelete){
            blogPosts.splice(i,1)
        }
    }

    res.send('ok')
})


module.exports = router;