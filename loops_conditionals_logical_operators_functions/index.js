const studentRating = (score) => {
  // Check if the student's score is 180 or above
  if (score >= 180) {
    // This means the student passed JAMB
    console.log('Passed');
  } else {
    // This means the student didn't meet cut-off mark
    console.log('Failed');
  }
};

// Call the function with scores
studentRating(250);
studentRating(170);

function votingEligibility(age) {
  // Check if the age is greater than or equal to 18
  if (age >= 18) {
    // This means the person is eligible to vote
    console.log('You are eligible to vote');
  } else {
    // This means the person is not eligible to vote
    console.log('Not eligible');
  }
}

// Call the function with age
votingEligibility(20);
votingEligibility(15);

// The below function checks a student's score and logs a message
const checkScore = (score) => {
  if (score >= 90) {
    console.log('Excellent');
  } else if (score >= 75) {
    console.log('Good');
  } else if (score >= 50) {
    console.log('Average');
  } else {
    console.log('Fail');
  }
};

// Call the function with 4 scores
checkScore(100);
checkScore(80);
checkScore(50);
checkScore(25);

const checkAccess = (hasID, isAbove18) => {
  // Check if the student has an ID and is above 18
  // Using ternary operator
  return hasID && isAbove18 ? 'Access granted' : 'Access denied';
};

// Call the function with 2 values
console.log(checkAccess(true, true));
console.log(checkAccess(false, true));

// Array of student scores
const studentScores = [85, 50, 90, 60, 75, 45];

// Looping through and checking with a for loop
for (let a = 0; a < studentScores.length; a++) {
  if (studentScores[a] > 50) {
    console.log('Pass');
  } else if (studentScores[a] <= 50) {
    console.log('Fail');
  }
}
