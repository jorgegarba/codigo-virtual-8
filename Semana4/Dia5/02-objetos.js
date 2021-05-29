/**
 * OBJETOS EN JAVASCRIPT
 */
let cpu = {
  ram: 16,
  nucleos: 8,
  discoSolido: "1Tb",
  enfriamientoLiquido: false
}
console.log(cpu);
// modificando una propiedad del objeto
cpu.ram = 8;
console.log(cpu);
//////////////////////////////////////

let plato = {
  nombre: "Asado de tira",
  precio: 39.00,
  ingredientes: ["carne de res", "papas", "legumbres"]
}

/*¿Cómo agregar un ingrediente al objeto plato? */

plato.ingredientes.push("chorizo");
plato.ingredientes[0] = "carnes de res corte asado de tira";

console.log(plato);

//////////////////////////////////////

let objTrabajador = {
  datosPersonales: {
    nombre: "Jorge",
    apellido: "Garnica",
    edad: 29
  },
  cargo: "software developer",
  sueldo: 950.00
}
// ¿Cómo agregar un atributo a un objeto?
objTrabajador.datosPersonales.telefono = "912358741"

console.log(objTrabajador);

/////////////////////////////////////



let ajiGallina = {
  nombre: "Ají de gallina",
  precio: 12.00,
  ingredientes: [{
    nombre: "Gallina",
    um: "pechuga",
    cant: 1
  }, {
    nombre: "Ají amarillo",
    um: "gramos",
    cant: 200
  }]
}
console.log(ajiGallina);

console.log("Listando los ingredientes");

for (let i = 0; i < ajiGallina.ingredientes.length; i++) {

  console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`);

}