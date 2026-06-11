document.addEventListener("DOMContentLoaded", () => {

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {

btn.addEventListener("click", () => {

if(btn.innerText === "Apply Now"){

alert("Application Submitted Successfully!");

}

});

});

});