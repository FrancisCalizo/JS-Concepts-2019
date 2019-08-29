// A reducer is a function that takes in two arguments:
// the current state and an action -- and returns based on
// both arguments a new state

// The reducer is a pure function without any side effects

// State processed by a reducer function is immutable

// We can use the spread operator to create a new state object
// from the incoming state and the part we want to change

// The action is normally defined as an object with a type property
// Based on the type of the action, the reducer can perform conditional
// state transitions

// An action provided for a reducer function can have an optional payload
// The payload is additional information to perform the state transition
// Often the optional payload of an action is put into another generic
// payload property to keep the top level of properties of an object more general
const personReducer = (person, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...person, age: person.age + 1 };
    case "CHANGE_LASTNAME":
      return { ...person, lastname: action.payload.lastname };
    default:
      return person;
  }
};

const initialState = {
  firstname: "Liesa",
  lastname: "Huppertz",
  age: 30
};
const action = {
  type: "CHANGE_LASTNAME",
  payload: {
    lastname: "Wieruch"
  }
};
const result = personReducer(initialState, action);

console.log(result);
