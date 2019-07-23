const http = new EasyHTTP();

// Make GET Request
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Make POST Request
const data = {
  name: 'Nick Miller',
  username: 'Illenium',
  email: 'NMiller@sadbois.com'
  // phone: '1-888-555-1234 x34234'
};

http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(res => console.log(res))
  .catch(err => console.log(err));
