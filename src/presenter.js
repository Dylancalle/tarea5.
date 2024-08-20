// import sumar from "./sumador";

const nombre_in = document.querySelector("#nombre");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const nombre = nombre_in.value;
//   const secondNumber = Number.parseInt(second.value);

   div.innerHTML = "<p>" + "Hola " + nombre + "</p>";
});
