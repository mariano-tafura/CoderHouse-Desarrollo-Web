//---------CREACION JUGADOR--------

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

//-------FUNCION DE COMPROBACION------

function comprobacion_rta(rta, solucion) {
    errores=[]
    aciertos=[]
    rta.forEach((valor_rta,index) => {
        // console.log(valor_rta)
        // console.log(solucion[index])
        if ((valor_rta===solucion[index] && valor_rta!="")){
            aciertos.push(valor_rta)
        } else errores.push(valor_rta) 
    })
}

//----FUNCION RESULTADO JUEGO----

function resultado() {
    if(errores.length==0){
        $("#modal_win").css("display","block")
        $("#modal_win").delay()
        $("#modal_win").animate({
          bottom:"0"
        })
     
  
    }else {
        $("#modal_lost").css("display","block")
        $("#modal_lost").delay(700)
        $("#modal_lost").animate({top:"0"}) 
    }
}


//CREACION OPCIONES DE SELECT
function function_option(variable, elemSelect) {
    var opt = document.createElement("option")
    opt.setAttribute("value",`none`)
    elemSelect.appendChild(opt)

    variable.forEach((elemento)=>{
        option_values=document.createElement("option")
        option_values.innerHTML=`${elemento}`
        option_values.setAttribute("value",`${elemento}`)
        elemSelect.appendChild(option_values)
    })
}

//CREACION TH y SELECT
function create_fila(variable) {
    th_new=document.createElement("th")
    th_new.setAttribute("class",`th_value`)
    select_new=document.createElement("select")
    select_new.setAttribute("class",`select_value`)

        function_option(variable, select_new)
    th_new.appendChild(select_new)
    tr_new.appendChild(th_new)
}

