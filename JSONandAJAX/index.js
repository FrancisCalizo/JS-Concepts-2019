var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    //console.log(response.people);
    var people = response.people;

    var output = '';
    for (let i = 0; i < people.length; i++) {
      //console.log(people[i].name);
      output += `<li> ${people[i].name} </li>`;
    }

    document.getElementById('people').innerHTML = output;
  }
};
xhttp.open('GET', 'people.json', true);
xhttp.send();
