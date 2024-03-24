let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    //cats.length = 0;
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }
  function appendCat(name) {
    cats = cats.concat(name);
    return cats;
  }
  function prependCat(name) {
    cats = cats.concat(name);
    cats.pop();
    return cats;
  }
  function removeLastCat() {
    cats = cats.slice(-1);
    return cats;
  }
  function removeFirstCat() {
    cats = cats.slice(0);
    return cats;
  }
