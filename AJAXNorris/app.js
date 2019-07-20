document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  e.preventDefault();

  xhr.onload = function() {
    console.log(JSON.parse(xhr.response).value[0].joke);
  };
  xhr.send();
}
