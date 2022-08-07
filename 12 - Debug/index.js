function secuencia(num) {
	let i = 2
	let lista = [1, 1]
	do {
		if (num == 1) return [1]
		if (num == 2) return [1, 1]
		lista = [...lista, lista[i - 1] + lista[i - 2]]
		i++
	} while (i < num)

	return lista
}

console.log(secuencia(6))
