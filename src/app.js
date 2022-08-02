/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// definiciones de variables

let who = [
  "darth ehiber",
  "ehiber smith",
  "ehiber siuuu",
  "ehiber prepartido",
  "tambien ehiber"
];
let action = [
  "me dijo que no hiciera ",
  "dijo que era para otro dia",
  "destruyo",
  "se comio",
  "se robo"
];
let what = [
  "mi tarea",
  "la investigacion de porque el madrid perdio ante el barca",
  "el trabajo grupal",
  "4geeks",
  "el dinero"
];
let when = [
  "despues de la goleada",
  "antes de la clase",
  "durante la clase",
  "ayer",
  "el otro dia"
];

function selectRandom(arr) {
  let random = ~~(Math.random() * arr.length);
  return arr[random];
}

window.onload = function() {
  //write your code here
  let result = `${selectRandom(who)} ${selectRandom(action)} ${selectRandom(
    what
  )} ${selectRandom(when)}`;
  let element = document.getElementById("excuse");
  element.innerHTML = result;
  console.log(result);
};
