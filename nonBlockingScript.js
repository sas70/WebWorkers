// create a new worker
const worker = new Worker("worker.js");

// Select the 2 HTML buttons named "sumButton" and "bgButton"
const sumButton = document.getElementById("sumButton");
const bgButton = document.getElementById("bgButton");

// Add an event listener to the "sumButton" button
// When the "sumButton" button is clicked,
//   1. Sum up the numbers 1 to 10^10
//   2. Display the sum in the "sum" div

sumButton.addEventListener("click", function () {
  worker.postMessage("Hello worker from the nonBlockingScript.js");
});

worker.onmessage = function (message) {
  console.log(message.data);
  alert("the final sum is : ", message.data);
};

// Add an event listener to the "bgButton" button
// When the "bgButton" button is clicked,
//   1. Change the background color of the "bg" div to a random color
//   2. Change the text color of the "bg" div to the opposite of the background color
bgButton.addEventListener("click", function () {
  let bgColor = document.body.style.background;
  if (bgColor !== "green") {
    document.body.style.background = "green";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "blue";
  }
});
