const input = document.querySelector("input");
const lista = document.querySelector("ul");

input.addEventListener("keyup", handleKeyUp);

function handleKeyUp(e) {
  if (e.key === "Enter") {
    const newLi = document.createElement("li");
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);

    input.value = "";
  }
}
