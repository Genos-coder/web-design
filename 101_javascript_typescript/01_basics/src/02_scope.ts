function doSomething() {
  var as1 = 12;
}

// console.log(as1);
//Above shit does not work as the as1 is declared in the function block and it's access or visibility is within that block.

let as2 = 12;

{
  //   console.log(as2); // here we get reference error because the block scope variable t is not initialized and it is used before ot's declaration
  let as2 = 10;
}

//The const and let are block scope variables
//const variable declaration must be initialized at point when they get declared
