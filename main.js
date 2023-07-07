const names = [];
const div = document.querySelector("div");

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  div.textContent += input.value + ", ";
  input.value = "";
};

document.querySelector("button").addEventListener("click", addName);
