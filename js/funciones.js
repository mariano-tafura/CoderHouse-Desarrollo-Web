//CREACION OPCIONES DE SELECT
function function_option(variable, elemSelect) {
    var opt = document.createElement("option")
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

//-------FUNCION DE COMPROBACION------

function comprobacion_rta(rta, solucion) {
    rta.forEach((valor_rta,index) => {
        console.log(valor_rta)
        console.log(solucion[index])
        if ((valor_rta===solucion[index] && valor_rta!="")){
        console.log("Casillero correcto")        
        } else errores.push(valor_rta) && console.log("Casillero incorrecto")
    })
}


//----FUNCION RESULTADO JUEGO----

function resultado() {
    if(errores.length==0){
      $("#modal_win").animate({
        top:"0"},
        function(){
        $("#modal_win").css("display","block")
    }) 
    $(".close").click(()=>{
        $("#modal_win").animate({
        top:"-2000"},
        function(){
        $("#modal_win").css("display","none")
        })
    })

    } else 
    $("#modal_lost").animate({
        top:"0"},
        function(){
        $("#modal_lost").css("display","block")
    }) 
    $(".close").click(()=>{
        $("#modal_lost").animate({
        top:"-2000"},
        function(){
        $("#modal_lost").css("display","none")
        })
    })
}




