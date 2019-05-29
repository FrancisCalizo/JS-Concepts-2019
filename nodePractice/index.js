// const person = require('./person');
// const Place = require('./place');
const Logger = require("./logger");
// const place1 = new Place('San Francisco', 'California');
// place1.location();

// console.log(person);

// console.log(`${__dirname}, ${__filename}`);
const logger = new Logger();

logger.on("message", data => console.log("Called Listener", data));

logger.log("hello world");
logger.log("hello hi");
logger.log("hello whats up");
