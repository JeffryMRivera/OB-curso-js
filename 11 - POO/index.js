class Estudiante {
	nombre = "Arnold Mosquera"
	asignaturas = ["Javascript", "HTML", "CSS"]
	obtenerDatos() {
		return {
			nombre: this.nombre,
			asignaturas: this.asignaturas,
		}
	}
}

const estudiante = new Estudiante()
console.log(estudiante.obtenerDatos)
