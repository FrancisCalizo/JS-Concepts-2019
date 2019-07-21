const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// // Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/5', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create Data for POST Request
const data = {
  title: 'Custom Post',
  body: ' This is a custom post'
};

// POST Request
http.post('https://jsonplaceholder.typicode.com/posts', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// PUT Request
http.put('https://jsonplaceholder.typicode.com/posts/2', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// // DELETE Post
http.delete('https://jsonplaceholder.typicode.com/posts/3', function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
