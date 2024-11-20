//Do while loops

let al1 = 0;
do {
  //   console.log(al1);
  al1++;
} while (al1 < 10);

//The do while loop runs at least once

//While loop with loop label

let al2 = 0;
let al3 = 0;
labeltobreakloop: while (true) {
  al2 += 1;
  al3 = 1;
  //   console.log("outer loop", al2);

  while (true) {
    al3 += 1;
    // console.log("inner loop", al3);
    if (al2 === 10 && al3 === 10) {
      break labeltobreakloop;
    } else if (al3 === 10) {
      break;
    }
  }
}

// we can use continue with labels

let al4 = 0;
testcontinuewithloop: while (al4 < 100) {
  al4++;
  if (al4 % 2 == 0) {
    continue testcontinuewithloop;
  }
  //   console.log(al4);
}

//For iterating over object we can use for in loop

const al5 = {
  name: "ganesh",
  level: 10,
  power: "web designer",
};

for (let i in al5) {
  console.log(`${al5[i as keyof typeof al5]} is value and key is ${i}`);
}

//For of loop for iterating over arrays

const al6 = [1, 2, 3, 4];
for (let i of al6) {
  console.log(i); // here we are printing values
}

//@ts-ignore
al6.stuff = "shit";

for (let i in al6) {
  console.log(i); // here we are printing index
}

//Destructuring over objects

for (let [key, value] of Object.entries(al5)) {
  console.log(key, value);
}

// basically using in we can iterate over index

// using of we can iterate over values
