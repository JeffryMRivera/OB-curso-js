let datos_personales = {
  nombre: "Arnold",
  apellido: "Mosquera",
  edad: 30,
  altura: "1.83",
  eresDesarrollador: true,
};
let { edad } = datos_personales;

let datos = [
  { ...datos_personales },
  {
    nombre: "Adrian",
    apellido: "Medina",
    edad: 33,
    altura: "1.83",
    eresDesarrollador: true,
  },
  {
    nombre: "Lizeth",
    apellido: "Botello",
    edad: 31,
    altura: "1.83",
    eresDesarrollador: false,
  },
];

const datosOrdenados = datos.sort((a, b) => b.edad - a.edad);

console.log(datosOrdenados);
