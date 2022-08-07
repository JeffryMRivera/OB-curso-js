const nombre = " Arnold"
const apellido = "Mosquera "
const estudiante = `${nombre} ${apellido}`
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const letras = estudiante.length
const primeraLetraNombre = nombre.trim().charAt(0)
const primeraLetraApellido = apellido.trim().charAt(apellido.trim().length - 1)
const sinEspacios = estudiante.replace(/ /g, "")
const existeNombre = estudiante
	.toLowerCase()
	.includes(nombre.trim().toLocaleLowerCase())
