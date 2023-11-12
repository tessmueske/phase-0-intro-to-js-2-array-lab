let cats;
console.log(cats);
cats = ["Milo", "Otis", "Garfield"];
module.exports = { cats };

function destructivelyAppendCat(name) {
    cats.push(name)
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name)
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop(name)
  }

  function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
  }

  function appendCat(name) {
    const newCats = cats.slice(); // create a shallow copy of the original cats array
    newCats.push(name); // add the new cat to the new array
    return newCats; // return the new array
  }

  function prependCat(name) {
    const newCats = cats.slice(); 
    newCats.unshift(name); 
    return newCats;
  }

  function removeLastCat(name) {
    const newCats = cats.slice(); 
    newCats.pop(name); 
    return newCats;
  }

  function removeFirstCat(name) {
    const newCats = cats.slice(); 
    newCats.shift(name); 
    return newCats;
  }