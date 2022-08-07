let boton = document.querySelector("button");
console.log(boton);

boton.addEventListener("click", () => {
  alert("click en el botón");
});

$("button").click((evento) => {
  console.log("Hola, estoy utilizando jQuery");
});
