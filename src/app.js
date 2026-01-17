import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const pronouns = ['the', 'our'];
  const adjectives = ['sneaky', 'sussy'];
  const nouns = ['crewmate', 'imposter'];
  const suffixes = ['com', 'net'];

  const bootstrapColors = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-light"
  ];

  let randomBootstrapColors = Math.floor(Math.random(bootstrapColors) * bootstrapColors.length);

  for (let index in pronouns) {
    for (let secondIndex in adjectives) {
      for (let thirdIndex in nouns) {
        for (let fourthIndex in suffixes) {
          let myUL = document.getElementById("myUl");
          let myLi = document.createElement("li");
          myUL.className = bootstrapColors[randomBootstrapColors];

          myLi.textContent = pronouns[index] + adjectives[secondIndex] + nouns[thirdIndex] + "." + suffixes[fourthIndex];
          myUL.appendChild(myLi);
        }
      }
    }
  }
};
