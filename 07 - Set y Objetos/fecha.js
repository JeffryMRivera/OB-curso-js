const hoy = new Date();

const fechaNacimiento = new Date(1992, 07, 12);

const hoyEsMayor = hoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const anyoNacimiento = fechaNacimiento.getFullYear();
