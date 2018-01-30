const superagent = require('superagent');
const fs = require('fs');
require('dotenv').config();

const API_KEY = 'AIzaSyCjdl3z9EJLUsxPHlxU1jpD4VKx1MwpHpc';
const BLOG_ID = '7219214733140697041';

const timestamp = new Date().toISOString();
const dir = `data/${timestamp}`;  

function getBlogArticles(nextPageToken) {
  let apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
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
          console.log(`The file ${blog.id} has been saved!`);
        });
      });

      if (nextPageToken) getBlogArticles(nextPageToken);
    })
    .catch(err => console.log('ERROR', err));
}

getBlogArticles();