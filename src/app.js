import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  for(let index in pronoun){
    for(let secondIndex in adj){
      for(let thirdIndex in noun){
        let myUL = document.getElementById("myUl");
        let myLi = document.createElement("li");
        
        myLi.textContent = pronoun[index] + adj[secondIndex] + noun[thirdIndex];
        myUL.appendChild(myLi);
      }
    }
  }
};
