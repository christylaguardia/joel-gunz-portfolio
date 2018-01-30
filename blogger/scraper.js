const superagent = require('superagent');
const fs = require('fs');
const API_KEY = 'AIzaSyCjdl3z9EJLUsxPHlxU1jpD4VKx1MwpHpc';
const BLOG_ID = '7219214733140697041';

// nextPageToken

function getBlogArticles(nextPageToken) {
  console.log('nextPageToken', nextPageToken);
  let apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
  if (nextPageToken) apiUrl = `${apiUrl}&pageToken=${nextPageToken}`;
  superagent
    .get(apiUrl)
    .then(res => {
      const blogs = res.body.items;
      blogs.sort((a, b) => a.published < b.published);
      const nextPageToken = res.body.nextPageToken;
      console.log('nextPageToken', nextPageToken);

      blogs.forEach(blog => {
        fs.writeFile(`posts/${blog.id}.json`, JSON.stringify(blog), (err) => {
          if (err) throw err;
          console.log(`The file ${blog.id} has been saved!`);
        });
      });

      if (nextPageToken) getBlogArticles(nextPageToken);
    })
    .catch(err => console.log(err));
}

getBlogArticles();