let value = "TEST123ANM345OUARE";
let vowels1 = "AEIOUaeiou";
let vowelsString = "";
let consonantsString = "";
for (let j = 0; j < value.length; j++) {
  let char1 = value[j];
  if (vowels1.includes(char1)) {
    vowelsString += char1;
  } else {
    consonantsString += char1;
  }
}

console.log("vowels:", vowelsString);
console.log("consonants:", consonantsString);

// 2. Add total for all students

const studentMarks = [
  { name: "john", mark1: 67, mark2: 67, mark3: 35, mark4: 70 },
  { name: "test", mark1: 78, mark2: 78, mark3: 89, mark4: 70 },
  { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark4: 70 },
  { name: "tom", mark1: 99, mark2: 99, mark3: 99, mark4: 39 },
];

for (let i = 0; i < studentMarks.length; i++) {
  let total =
    studentMarks[i].mark1 +
    studentMarks[i].mark2 +
    studentMarks[i].mark3 +
    studentMarks[i].mark4;

  studentMarks[i].Total = total;
}
console.log(studentMarks);

const studentMarks1 = [
  { name: "Ganapathy", mark1: 67, mark2: 67, mark3: 35, mark4: 70, total: 239 },
  { name: "test", mark1: 78, mark2: 78, mark3: 89, mark4: 70, total: 315 },
  { name: "dummy", mark1: 99, mark2: 54, mark3: 90, mark4: 70, total: 313 },
  { name: "3434", mark1: 99, mark2: 99, mark3: 99, mark4: 39, total: 336 },
];

let passCount = 0;
for (let i = 0; i < studentMarks1.length; i++) {
  const student = studentMarks1[i];

  if (
    student.mark1 >= 40 &&
    student.mark2 >= 40 &&
    student.mark3 >= 40 &&
    student.mark4 >= 40
  ) {
    student.status = "Pass";
    passCount++;
  } else {
    student.status = "Fail";
  }
}

const passPercentage = (passCount / studentMarks1.length) * 100;
console.log(studentMarks1);
console.log(`Pass Percentage: ${passPercentage.toFixed(2)}%`);
