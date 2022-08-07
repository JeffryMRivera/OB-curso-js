let nombre = "Arnold Jeffry";
let apellido = "Mosquera Rivera";

let persona = {
  nombre,
  apellido,
};

sessionStorage.setItem("persona", JSON.stringify(persona));
localStorage.setItem("persona", JSON.stringify(persona));

var expire = new Date();
expire.setTime(expire.getTime() + 2 * 60 * 1000);

document.cookie =
  "persona=" + JSON.stringify(persona) + "; expires=" + expire.toUTCString();
