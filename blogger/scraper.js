const superagent = require('superagent');
const fs = require('fs');
require('dotenv').config();

const API_KEY = 'AIzaSyCjdl3z9EJLUsxPHlxU1jpD4VKx1MwpHpc';
const BLOG_ID = '7219214733140697041';
let apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;

const timestamp = new Date().toISOString();
const dir = `data/${timestamp}`;  

// TODO: SET INTERVAL

function getBlogArticles(nextPageToken) {
  if (nextPageToken) apiUrl = `${apiUrl}&pageToken=${nextPageToken}`;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  
  superagent
    .get(apiUrl)
    .then(res => {
      const nextPageToken = res.body.nextPageToken;
      const blogs = res.body.items;

      blogs.forEach(blog => {
        fs.writeFile(`${dir}/${blog.id}.json`, JSON.stringify(blog), (err) => {
          if (err) throw err;
          console.log(`The file ${blog.id} has been saved! Updated: ${blog.updated}`);
        });
      });

      if (nextPageToken) getBlogArticles(nextPageToken);
    })
    .catch(err => console.log('ERROR', err));
}

// getBlogArticles();


// THIS DOESN'T WORK
function getLatestBlogArticle(nextPageToken, blogs=[]) {
  console.log('getting posts...', nextPageToken);
  if (nextPageToken) apiUrl = `${apiUrl}&pageToken=${nextPageToken}`;

  superagent
    .get(apiUrl)
    .then(res => {
      const newPageToken = res.body.nextPageToken;
      const newBlogs = res.body.items;
      // newBlogs.forEach
      console.log('newBlogs', newBlogs);
      blogs.push(newBlogs);
      
      if (newPageToken) return getLatestBlogArticle(newPageToken, blogs);

      console.log(blogs);
      

      const latest = blogs.sort((a, b) => a.updated - b.updated)[0];
      console.log(latest);
      // return latest;

    })
    .catch(err => console.log('ERROR', err));
}

// getLatestBlogArticle();