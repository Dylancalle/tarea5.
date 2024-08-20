import saludar from "./sumador";

const nombre_in = document.querySelector("#nombre");
const genero_in = document.querySelector("#genero");
const edad_in = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const nombre = nombre_in.value;
   const genero = genero_in.value;
   const edad = edad_in.value;

   div.innerHTML = "<p>" + saludar(nombre, genero, edad) + "</p>";
});
