class Place {
  constructor(city, state){
    this.city = city;
    this.state = state;
  }

  location(){
    console.log(`The location is ${this.city}, ${this.state}.`)
  }
}

module.exports = Place;