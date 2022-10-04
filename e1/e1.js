/* CREACION DE OBJETOS */

class Pizzas {
    base = ['masa', 'salsa'];
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const napolitana = new Pizzas(3, 'Napolitanna', ['queso', 'tomate', 'albahaca', 'oregano', 'aceite de oliva'], 1500);
const cancha = new Pizzas(2, 'De Cancha', ['tomate',], 500);
const muzarella = new Pizzas(1, 'Muzza', ['queso', 'oregano'], 100);
const salame = new Pizzas(4, 'Salame', ['queso', 'salame'], 1500);
const cebolla = new Pizzas(5, 'Cebolla', ['queso', 'cebolla'], 1500);
const jamon_y_morrones = new Pizzas(6, 'Jamon', ['queso', 'jamon', 'morrones', 'aceite de oliva'], 1500);

let listaPizzas = [napolitana, cancha, muzarella, salame, cebolla, jamon_y_morrones];

/* ACTIVIDADES */

/* A: IMPARES */

const pizzasIdImpar = (lista) => {
    const accederAPizzas = lista.forEach(element => {
        if (element.id % 2 != 0){
            console.log(`${element.nombre} es una pizza con ID impar. (${element.id}).`)
        }
    });
    return accederAPizzas;
}

pizzasIdImpar(listaPizzas);

/* B: PIZZAS PRECIO MENOR A 600$ */

const pizzasBajoCosto = (lista) => {
    let listaPizzasBajoCosto = [];
    const accederAPizzas = lista.forEach(element => {
        let precioPizzas = element.precio;
        if (precioPizzas < 600){
            listaPizzasBajoCosto.push(element.nombre)
        }
    });
    return console.log(listaPizzasBajoCosto.join(', ') + ': son pizzas que salen menos de 600$')
}

pizzasBajoCosto(listaPizzas);

/* C: NOMBRES Y PRECIOS */

const pizzasNombresYPrecios = (lista) => {
    const mostrarNombresYPrecios = lista.forEach( element => {
        console.log(`La pizza ${element.nombre} vale: $${element.precio}.`);
    });
}

pizzasNombresYPrecios(listaPizzas);

/* D: RECORRER INGREDIENTES */

const recorrerPizzas = (pizzas) => {
    pizzas.forEach( pizza =>{
        console.log(`La pizza ${pizza.nombre}, tiene los siguientes ingredientes: `)
        let listaIngredientes = pizza.ingredientes.join(', ');
        console.log(listaIngredientes);
    })
}

recorrerPizzas(listaPizzas);