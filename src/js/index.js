/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

// const bubbleSort = arr => {
//   let wall = arr.length - 1; //we start the wall at the end of the array
//   while (wall > 0) {
//     let index = 0;
//     while (index < wall) {
//       //compare the adjacent positions, if the right one is bigger, we have to swap
//       if (arr[index] > arr[index + 1]) {
//         let aux = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = aux;
//       }
//       index++;
//     }
//     wall--; //decrease the wall for optimization
//   }
//   return arr;
// };
// console.log("howdy yall");

// document.querySelector("#cardz").innerHTML +=`${<div>}${bubbleSort()}${</div>}`;
