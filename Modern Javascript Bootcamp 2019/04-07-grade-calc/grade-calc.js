let student = function(studentScore, maxScore) {
  let testScore = (studentScore / maxScore) * 100;
  let gradeScore = ' ';
  if (testScore <= 100 && testScore >= 90) {
    gradeScore = 'A';
  } else if (testScore <= 89 && testScore >= 80) {
    gradeScore = 'B';
  } else if (testScore <= 79 && testScore >= 70) {
    gradeScore = 'C';
  } else if (testScore <= 69 && testScore >= 60) {
    gradeScore = 'D';
  } else {
    gradeScore = 'F';
  }
  console.log(
    `${studentScore}/${maxScore} => You got a ${gradeScore} (${testScore}%)`
  );
};

student(10, 20);
