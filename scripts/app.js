const myFullName = "Jagnoor Kaur Cheema";
const myStudentNumber = "1163744";
const result = `${myFullName} - ${myStudentNumber}`;

console.log(result);

let header = document.querySelector("#headerContent");

document.getElementById("headerContent").innerHTML = "Jagnoor Kaur Cheema-1163744";

header.classList.add("headingPrimary");
