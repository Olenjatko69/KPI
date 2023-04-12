var foo;

foo = 1;

var foo = 1;
var someString = 'some string';
var someBool = false;

var Andryj = {
  name: 'Andryj',
  age: 8,
};
var Maksym = {
  name: 'Maksym',
  age: 6,
};

var Nazar = {
  name: 'Nazar',
  age: 36,
  children: [Andryj, Maksym],
  work: {
    companyName: 'Yakas',
    founded: 1969,
  },
};
var Karas = Nazar;

console.log(Nazar);
console.log(Karas['name']);
console.log(Karas.name);

Karas.name = 'Karas';
console.log(Karas.name);
console.log(Nazar['name']);

var lotteryNumbers5April = [4, 8, 15, 16, 23, 42];

var lotteryNumbers6April = lotteryNumbers5April;
console.log(lotteryNumbers6April[0]);
lotteryNumbers6April[0] = 3;
console.log(lotteryNumbers5April);

var cat = true;
var dog = cat;
dog = false;
console.log(cat);
console.log(dog);

var lotteryNumbersInObject = {};
