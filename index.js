import { characters } from "./characters.js";

let outputEl1 = document.getElementById("output-el1");
let outputEl2 = document.getElementById("output-el2");

let password1 = "";
let password2 = "";

let passwordLength = 15;

const generatePassword = () => {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
};

document.getElementById("generate-btn").addEventListener("click", () => {
  password1 = generatePassword();
  password2 = generatePassword();

  outputEl1.textContent = password1;
  outputEl2.textContent = password2;
});
