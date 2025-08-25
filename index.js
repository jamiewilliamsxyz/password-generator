import { characters } from "./characters.js";

let outputEl1 = document.getElementById("output-el1");
let outputEl2 = document.getElementById("output-el2");

let password1 = "";
let password2 = "";

const generatePassword = () => {
  return "testPassword";
};

document.getElementById("generate-btn").addEventListener("click", () => {
  password1 = generatePassword();
  password2 = generatePassword();

  outputEl1.textContent = password1;
  outputEl2.textContent = password2;
});
