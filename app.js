let inputs = document.querySelectorAll("input");
let button = document.querySelector(".btn");
let result = document.querySelector("#result");
let marks = [];

button.addEventListener("click", function (e) {
  e.preventDefault();

  inputs.forEach((input) => {
    let inp = Number(input.value);
    marks.push(inp);

    input.value = "";
  });

  let totalMarks = marks.reduce((a, b) => a + b, 0);

  let percentage = Math.round((totalMarks / 600) * 100);

  result.innerHTML = "";

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0 || marks[i] > 100 || isNaN(marks)) {
      result.innerHTML = "Please enter valid marks between 0 and 100.";
      return;
    }
  }

  if (percentage >= 80) {
    result.innerHTML = `Grade: A <br>`;
  } else if (percentage >= 70) {
    result.innerHTML = `Grade: B <br>`;
  } else if (percentage >= 60) {
    result.innerHTML = `Grade: C <br>`;
  } else if (percentage >= 50) {
    result.innerHTML = `Grade: D <br>`;
  } else {
    result.innerHTML = `You are Fail! <br>`;
  }

  result.innerHTML += `Total Marks: ${totalMarks}<br>
  Percentage: ${percentage} `;

  marks = [];
});
