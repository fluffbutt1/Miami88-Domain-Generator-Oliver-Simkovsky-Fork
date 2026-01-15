import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['sneaky', 'sussy'];
  let noun = ['crewmate', 'imposter'];
  let end = ['com', 'net'];

  const bootstrapColors = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light"
  ];

  let rand = Math.floor(Math.random(bootstrapColors) * bootstrapColors.length);

  for (let index in pronoun) {
    for (let secondIndex in adj) {
      for (let thirdIndex in noun) {
        for (let fourthIndex in end) {
          let myUL = document.getElementById("myUl");
          let myLi = document.createElement("li");
          myUL.className = bootstrapColors[rand];

          myLi.textContent = pronoun[index] + adj[secondIndex] + noun[thirdIndex] + "." + end[fourthIndex];
          myUL.appendChild(myLi);
        }
      }
    }
  }
};
