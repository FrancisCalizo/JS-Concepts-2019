document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  e.preventDefault();

  xhr.onload = function() {
    if (this.status == 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      // Check if API sends back a success response in JSON
      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
}
