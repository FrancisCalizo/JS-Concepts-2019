function makeRequest(location) {
  return new Promise((resolve, reject) => {
    if (location === 'Ohyoufrancybruh') {
      resolve("You have made a request to Ohyoufrancybruh's blog!");
    } else {
      reject('Sorry, you do not have access to that site');
    }
  });
}

function processRequest(response) {
  return new Promise(resolve => {
    resolve(`Pretend this is some extra information | ${response}`);
  });
}

// Using Promise Syntax
// makeRequest('Ohyoufrancybruh')
//   .then(response => {
//     return processRequest(response);
//   })
//   .then(processedResponse => {
//     console.log(processedResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Using Async/Await Syntax
(async function doWork() {
  try {
    const response = await makeRequest('Ohyoufrancybruh');
    console.log(response);
    const proccesedResponse = await processRequest(response);
    console.log(proccesedResponse);
  } catch {
    console.log(err);
  }
})();
