var express = require('express')
var router = express.Router()
const Admin = require('firebase-admin');
const Posts = Admin.database().ref('/posts')

function slugify (title) {
  let slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
    .replace(/[\s_-]+/g, '-') // swap any length of whitespace, underscore, hyphen characters with a single -
    .replace(/^-+|-+$/g, ''); // remove leading, trailing -
  return slug
}

function getPosts() {
  return Posts.once('value').then(snapshot => snapshot.val());
}

function getPost(key) {
  let Post = Admin.database().ref('/posts').child(key)
  return Post.once('value').then(snapshot => snapshot.val());
}

function addPost(data) {
  let {title} = data
  data['slug'] = slugify(title)
  Posts.push(data)
}

router.get('/', function (req, res) {
  res.send('THE API ROUTE');
})

router.get('/posts', function (req, res) {
  getPosts().then(posts => {
    res.status(200).json(posts);
  });
})

// About page route
router.get('/posts/:key', function (req, res) {
  getPost(req.params.key).then(post => {
    res.status(200).json(post);
  });
})

router.post('/posts', function (req, res) {
  addPost(req.body)
  res.status(200).send('ROUTER: Success!');
})

module.exports = router
