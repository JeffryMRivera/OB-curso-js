const onlyTrue = () => true;

async function promesa() {
  return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* pares() {
  let id = 0;
  while (true) {
    id += 2;
    yield id;
  }
}
const paresVar = pares();
console.log(paresVar.next());
