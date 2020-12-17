class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;    
    }
    aumentaVelocidad() {
        this.velocidad += 1;
    }
    reduceVelocidad() {
        this.velocidad -= 1;
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }
    mostrarAltura(){
        return "La altura es " + this.altura;
    }
}

var autobus1 = new Autobus("Pegasus", 100, 2016);
console.log(autobus1.mostrarAltura());


var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Mercedes', 220, 2019);

document.write("<h1>velocidad: "+coche1.velocidad+"</h1>");
coche1.aumentaVelocidad();
document.write("<h1>velocidad: "+coche1.velocidad+"</h1>");
console.log(coche1);