// Usage of 'onload' instead of onreadystatechange
function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'people.json', true);

  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  xhr.send();
}

loadData();
