let compra = ["Carne", "Pollo", "Manzanas", "Arroz", "Vegetales"];
let compra2 = [...compra, "Aceite de Girasol"];
let compra3 = compra.filter((valor) => valor !== "Aceite de Girasol");

let peliculas = [
  {
    titulo: "El padrino",
    director: "Francis Ford Coppola",
    fecha: new Date(1972, 8, 30),
  },
  {
    titulo: "Dune",
    director: "Denis Villeneuve",
    fecha: new Date(2022, 10, 20),
  },
  {
    titulo: "Ciudad de Dios",
    director: "Fernando Meirelles, Kátia Lund",
    fecha: new Date(2002, 10, 20),
  },
];
let despues2010 = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 01, 01)
);
let directores = peliculas.map((pelicula) => pelicula.director);
let titulos = peliculas.map((pelicula) => pelicula.titulo);
let peliculasConcat = titulos.concat(directores);
let peliculasPropagacion = [...titulos, ...directores];
