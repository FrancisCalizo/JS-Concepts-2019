const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';

    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}

async function showPosts() {
  await createPost({ title: 'Post Three', body: 'This is Post Three' });

  getPosts();
}

showPosts();

// Async|Await w/ Fetch
(async function fetchUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await users.json();

  console.log(data);
})();
