//SOLUCION
const solucion_uno = ["noruego","amarilla","gato","agua","dunhill"];
const solucion_dos = ["danes","azul","caballo","te","blends"];       
const solucion_tres = ["britanico","roja","pajaro","leche","pallmall"];
const solucion_cuatro = ["aleman","verde","pez","cafe","prince"];
const solucion_cinco = ["sueco","blanca","perro","cerveza","bluemaster"];

solucion=[solucion_uno,solucion_dos,solucion_tres,solucion_cuatro,solucion_cinco]

//Respuestas Jugador
var respuestas_matriz=[]

//VARIABLES PARA CREAR TABLA
const fila_encabezado=["nacionalidad","casa","mascota","bebida","cigarrillo"]
const paises=["sueco","aleman","noruego","britanico","danes"]
const json_paises=JSON.stringify(paises)
const colores=["roja","blanca","azul","amarilla","verde"]
const json_colores=JSON.stringify(colores)
const mascotas=["pajaro","perro","caballo","gato","pez"]
const json_mascotas=JSON.stringify(mascotas)
const bebidas=["leche","cerveza","te","agua","cafe"]
const json_bebidas=JSON.stringify(bebidas)
const cigarros=["pallmall","bluemaster","blends","dunhill","prince"]
const json_cigarros=JSON.stringify(cigarros)

//OBJETO PARA CREAR LISTA
const items_list=["El británico vive en la casa roja","El sueco tiene un perro como mascota","El danés toma té","El noruego vive en la primera casa","El alemán fuma Prince","La casa verde está inmediatamente a la izquierda de la blanca","El dueño de la casa verde bebe café","El propietario que fuma Pall Mall cría pájaros","El dueño de la casa amarilla fuma Dunhill","El hombre que vive en la casa del centro bebe leche","El vecino que fuma Blends vive al lado del que tiene un gato","El hombre que tiene un caballo vive al lado del que fuma Dunhill","El propietario que fuma Bluemaster toma cerveza","El vecino que fuma Blends vive al lado del que toma agua","El noruego vive al lado de la casa azul"]


//CONST CSS
const item_check_css={"color":"gray","text-decoration":"line-through"}
const item_check_animate={"opacity":"0.5","font-size":"14px"}
const item_check_animate2={"opacity":"1","font-size":"15px"}
const item_uncheck_css={"color":"black","opacity":"1","text-decoration":"none"}
const color_option={"color":"rgba(175, 1, 1, 0.80)", "text-decoration":"line-through"}
   


//---------NUEVO JUGADOR--------

const get_nombre=localStorage.getItem("Nombre")
const get_apellido=localStorage.getItem("Apellido")
const nuevo_jugador=(new jugador((get_nombre),(get_apellido)))


