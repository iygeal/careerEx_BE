// Variable showing my perosnal data
const name = 'Iygeal Anozie';
const age = 70;
const nationality = 'Nigeria';

// Displaying my personal data on the console
console.log(
  `My name is ${name}, I am ${age} years old and I am from ${nationality}.`
);

// My favourite quote
const favouriteQuote = 'Live and let live.';

// Displaying my favourite quote on the console in caps
console.log(favouriteQuote.toUpperCase());

// Displaying my favourite quote on the console in lowercase
console.log(favouriteQuote.toLowerCase());

// Word to be reversed and logged to the console
const myWord = 'xEreeraC';

// Split the word and reverse it, then join it back together
const myWordReversed = myWord.split('').reverse().join('');

// Displaying the reversed word on the console
console.log(myWordReversed);

// Price of 3 items in variables
const priceOfPhone = 1500000;
const priceOfTablet = 1000000;
const priceOfLaptop = 2000000;

// Total price of the 3 items displayed with a message
console.log(
  `The total price of my home gadgets is ${
    priceOfPhone + priceOfTablet + priceOfLaptop
  }.`
);

// 5 test scores stored in variables
const score1 = 80;
const score2 = 90;
const score3 = 70;
const score4 = 85;
const score5 = 95;

// Average of the scores displayed with a message
const totalScore = score1 + score2 + score3 + score4 + score5;

const averageScore = totalScore / 5;

console.log(`The student has an average score of ${averageScore}.`);

// An array of my 5 favourite foods
const favouriteFoods = ['Egg', 'Cake', 'Garri', 'Rice', 'Beans'];

// Displaying the first and last elements of the array
console.log(`First: ${favouriteFoods[0]}. Last: ${favouriteFoods[4]}.`);

// Add two more foods to the array: one at the beginning and one at the end
favouriteFoods.unshift('Shawarma');
favouriteFoods.push('Chicken');

// Displaying the updated array/list
console.log(favouriteFoods);

// 3 arrays of 10 strings (which are student names)

const jssOne = [
  'Victor',
  'Victoria',
  'Olajumokemi',
  'Adeyemi',
  'Oluwafunmi',
  'Jackson',
  'Olusegun',
  'Adeola',
  'Oluwafemi',
  'Seun',
];

const jssTwo = [
  'Iygeal',
  'Innocent',
  'Anozie',
  'Onyekachi',
  'Chibuike',
  'Ugonna',
  'Chibueze',
  'Ikenna',
  'Adaugo',
  'Chioma',
];

const jssThree = [
  'Abdul',
  'Ahmed',
  'Aminu',
  'Abubakar',
  'Aminat',
  'Aishat',
  'Ibrahim',
  'Bello',
  'Isa',
  'Abdullahi',
];

// Displaying the 3 arrays
console.log('Students in JSS 1:', jssOne);
console.log('Students in JSS 2:', jssTwo);
console.log('Students in JSS 3:', jssThree);
