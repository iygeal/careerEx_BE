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
    return 'You are eligible to vote';
  } else {
    // This means the person is not eligible to vote
    return 'Not eligible';
  }
}

// Call the function with age
console.log(votingEligibility(18));
console.log(votingEligibility(17));

// The below function checks a student's score and returns a message
const checkScore = (score) => {
  if (score >= 90) {
    return 'Excellent';
  } else if (score >= 75) {
    return 'Good';
  } else if (score >= 50) {
    return 'Average';
  } else {
    return 'Fail';
  }
};

// Call the function with 4 scores
console.log(checkScore(95));
console.log(checkScore(75));
console.log(checkScore(50));
console.log(checkScore(25));

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

// Looping through and checking scores with a for loop
for (let a = 0; a < studentScores.length; a++) {
  if (studentScores[a] > 50) {
    console.log('Pass');
  } else if (studentScores[a] <= 50) {
    console.log('Fail');
  }
}

// The below arrow returns Yes if student passes both English and Maths
const checkIfStudentPassed = (mathScore, englishScore) => {
  return mathScore >= 50 && englishScore >= 50 ? 'Yes' : 'No';
};

// Call the function with 2 scores
console.log(checkIfStudentPassed(50, 50));
console.log(checkIfStudentPassed(50, 40));

// Below function checks if a student has either an email or a phone number
// before signing up
const canSignUp = (hasEmail, hasPhoneNumber) => {
  return hasEmail || hasPhoneNumber ? 'Can Sign Up' : 'Cannot Sign Up';
};

// Call the function with some values
console.log(canSignUp(true, false));
console.log(canSignUp(false, true));
console.log(canSignUp(false, false));

// This function takes username and password
// It returns "Invalid input" if one of them is empty using || operator

const checkCredentials = (username, password) => {
  if (username == '' || password == '') {
    return 'Invalid input';
  } else {
    return 'Valid input';
  }
};

// Call the function with some values
console.log(checkCredentials('', 'password'));
console.log(checkCredentials('username', ''));
console.log(checkCredentials('username', 'password'));

// This function checks if employee works full time or part time,
// with 40 hours as benchmark
const employeeType = (hoursWorked) => {
  // Check work hours using ternary operator
  return hoursWorked >= 40 ? 'Full-time' : 'Part-time';
};

// Call the function with 2 values
console.log(employeeType(40));
console.log(employeeType(39));

// This arrow function takes 2 numbers and returns the larger number
const largerNumber = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

// Call the function with 2 values
console.log(largerNumber(10, 20));
console.log(largerNumber(20, 10));
