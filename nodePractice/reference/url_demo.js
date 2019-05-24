const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello?id=100&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log(myUrl.host);

// Hostname (Does not get port)
console.log(myUrl.hostname);

// Path Name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
console.log(myUrl.href);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
