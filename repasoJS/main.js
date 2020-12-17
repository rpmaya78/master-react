//alert('hola mundo');

var nombre = "Ricardo P";
var altura = 189;

var concatenacion = nombre + " " + altura;

//document.write(concatenacion);
/*
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido ${altura} cm</h3>
`;

if (altura >= 190){
    datos.innerHTML += '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML += '<h1>Eres una persona baja</h1>';
}

for(var i = 2000; i<=2020; i++) {
    datos.innerHTML += "<h3>Estamos en el año: " + i;
}
*/
function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido ${altura} cm</h3>
    `;
    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Ricardo P", altura);
}

imprimir();

var nombres = ['Víctor', 'Antonio', 'Luis'];
//alert(nombres[1]);

document.write('<h1>Listado de nombres</h1>');
/*
for (i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}
*/
/*
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
});
*/
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 240,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    prop1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos!";
        //saludo = false;
        if (saludo) {
            resolve(saludo);
        }else{
            reject('No hay saludo disponble');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
}).catch(err => {
    alert(err);
})
