// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

function peopleWithAgeDrink(old) {
    return old >= 21 ? "drink whisky" :
       old >= 18 ? "drink beer" :
         old >= 14 ? "drink coke" : "drink toddy";
   };