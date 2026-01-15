import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = '.com'

  const bootstrapColors = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light",
    "text-dark"
  ];

  let rand = Math.floor(Math.random(bootstrapColors) * bootstrapColors.length);

  for (let index in pronoun) {
    for (let secondIndex in adj) {
      for (let thirdIndex in noun) {
        let myUL = document.getElementById("myUl");
        let myLi = document.createElement("li");
        myLi.id = "myLi";
        const element = document.getElementById("myUl");

        myLi.textContent = pronoun[index] + adj[secondIndex] + noun[thirdIndex] + end;
        myUL.appendChild(myLi);
        element.className = bootstrapColors[rand];
      }
    }
  }
};
