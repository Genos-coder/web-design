//We can declare function as anonymous see below

const factorial = function (n: number): number {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(3));

//Making a map function

function mapIt(arr: number[], factor: number) {
  return arr.map((number) => number * factor);
}

function mapIt2<Input, Output>(callback: (arg: Input) => Output, arr: Input[]) {
  const mapArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    mapArr[i] = callback(arr[i]);
  }
  return mapArr;
}

console.log(mapIt2((arg: number) => arg * 2, [1, 2, 3, 4]));

//we can call the function before they being made because functions are hoisted

console.log(square(12));
function square(x: number) {
  return x ** 2;
}

//Making the function which can iterate over thr DOM tree

function walkTree(node: HTMLElement) {
  if (node === null) {
    return;
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i] as HTMLElement);
  }
}

// making recursive function run below function and observe its output

function reduceNum(i: number) {
  if (i === 0) {
    return;
  }
  console.log(`the i here is ${i}`);
  reduceNum(i - 1);
  console.log(`the i here is ${i}`);
}

// reduceNum(5);

//Closure : The access of the values of outside variables from function which is nested inside is called closure

function A(x: number) {
  function B(y: number) {
    function C(z: number) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}

A(1);

//If there is name conflict the innermost function prefer it's own variable

function outer(x: number) {
  function inner(x: number) {
    return x ** 2;
  }
  return inner;
}

console.log(outer(2)(10));

//Using function to create an object

function createPet(petName: string) {
  let sex: string;
  const pet = {
    name: petName,
    getName() {
      return this.name;
    },
    setName(newName: string) {
      this.name = newName;
    },
    getSex() {
      return sex;
    },
    changeSex(newSex: string) {
      if (
        newSex.toLocaleLowerCase() === "male" ||
        newSex.toLocaleLowerCase() === "female"
      ) {
        sex = newSex;
      }
    },
  };
  return pet;
}

const p1 = createPet("vinnie");
console.log(p1.getName());
console.log(p1.setName("joe"));
console.log(p1.getName());

//Using argument object

// when we pass extra argument inside the function without mentioning them then they get allocated inside argument identifier by default

function concatStr(separator: string) {
  let str = "";

  for (let i = 0; i < arguments.length; i++) {
    str += arguments[i] + separator;
  }

  return str.slice(0, -separator.length);
}

//@ts-ignore
console.log(concatStr(",", "this", "is", "not", "a", "end"));
