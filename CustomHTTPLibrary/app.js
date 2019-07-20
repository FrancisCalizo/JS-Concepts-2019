const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/postsd/1', function(err, post) {
  console.log(err, post);
});
