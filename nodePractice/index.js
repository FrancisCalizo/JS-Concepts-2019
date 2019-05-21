const person = require('./person');
const Place = require('./place');

const place1 = new Place('San Francisco', 'California');
place1.location();

console.log(person);

console.log(`${__dirname}, ${__filename}`);
