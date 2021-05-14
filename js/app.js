const solucion_uno = ["noruego","amarilla","gato","agua","dunhill"];
const solucion_dos = ["danes","azul","caballo","te","blends"];       
const solucion_tres = ["britanico","roja","pajaro","leche","pallmall"];
const solucion_cuatro = ["aleman","verde","pez","cafe","prince"];
const solucion_cinco = ["sueco","blanca","perro","cerveza","bluemaster"];

solucion=[solucion_uno,solucion_dos,solucion_tres,solucion_cuatro,solucion_cinco]

var fila_encabezado=["nacionalidad","casa","mascota","bebida","cigarrillo"]
var paises=["sueco","aleman","noruego","britanico","danes"]
const json_paises=JSON.stringify(paises)
var colores=["roja","blanca","azul","amarilla","verde"]
const json_colores=JSON.stringify(colores)
var mascotas=["pajaro","perro","caballo","gato","pez"]
const json_mascotas=JSON.stringify(mascotas)
var bebidas=["leche","cerveza","te","agua","cafe"]
const json_bebidas=JSON.stringify(bebidas)
var cigarros=["pallmall","bluemaster","blends","dunhill","prince"]
const json_cigarros=JSON.stringify(cigarros)


let items=["El británico vive en la casa roja","El sueco tiene un perro como mascota","El danés toma té","El noruego vive en la primera casa","El alemán fuma Prince","La casa verde está inmediatamente a la izquierda de la blanca","El dueño de la casa verde bebe café","El propietario que fuma Pall Mall cría pájaros","El dueño de la casa amarilla fuma Dunhill","El hombre que vive en la casa del centro bebe leche","El vecino que fuma Blends vive al lado del que tiene un gato","El hombre que tiene un caballo vive al lado del que fuma Dunhill","El propietario que fuma Bluemaster toma cerveza","El vecino que fuma Blends vive al lado del que toma agua","El noruego vive al lado de la casa azul"]

class jugador {
    constructor(nombre, apellido ) {
        this.nombre  = nombre;
        this.apellido  = apellido;
    }
    get obtener_nombre() {
        return this.nombre    }

    get obtener_apellido(){
        return this.apellido
    }
}


