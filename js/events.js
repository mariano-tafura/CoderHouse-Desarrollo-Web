//--------TITULO------
$( document ).ready(function() {

$(".incognita").mouseover(function(){
    $(".incognita").fadeOut("slow")
                   .fadeIn(1000)
})

//---------------BOTON PLAY-----------------------
$("#boton_play").click(()=>{

    if($("#nombre").val()=="" || $("#apellido").val()==""){
        console.log("Por favor complete los campos")
        $("#error_datos").css("display","block")
        
        $("#error_datos").animate({
            top:"0"},
            function(){
            })

        $(".close").click(()=>{
            $("#error_datos").animate({
            top:"-2000"},
            function(){
            $("#error_datos").css("display","none")
            })
        })

    }else{

    $("form").hide(1000)
    $("#boton_play").hide(1500)
    $(`.lista`).slideToggle(1000)
    $("#contenedor_tabla").show(2000)    

    let obtener_nombre=$("#nombre").val()
    let obtener_apellido=$("#apellido").val()
    localStorage.setItem("Nombre", obtener_nombre)
    localStorage.setItem("Apellido", obtener_apellido)
    let nombre=localStorage.getItem("Nombre")
    let apellido=localStorage.getItem("Apellido")

    let nuevo_jugador=(new jugador((nombre),(apellido)))
    console.log(`${nuevo_jugador.nombre} ${nuevo_jugador.apellido} está jugando...`)

    }

})

//-----------------------BOTON DE COMPROBACION-----------------------

let respuestas_matriz=[]

let obtener_valores_rta=$("#send_button")
console.log(obtener_valores_rta)

obtener_valores_rta.click(()=>{

    $("#modal_div").css("display","block")

    $("#modal_div").animate({
        top:"0"},
        function(){
            console.log("Ingrese su mail y pulsa continuar para ver la solución")
        })
                                
    $(".modal-content").css("display","block")

    //CERRAR MODAL
    $(".close").click(()=>{
        $("#modal_div").animate({
        left:"-2000"},
        function(){
        $("#modal_div").css("display","none")
        })
    })

    //ENVIAR MODAL
    $(".modalContainer button").click((function(e){
        e.preventDefault()

        if($("#email").val()==""){
            console.log("Por favor complete el mail")
        }else{
        
        let obtener_mail=$("#email").val()
        localStorage.setItem("email", obtener_mail)
        obtener_mail=localStorage.getItem("email")
        console.log("Mail obtenido con exito: " + obtener_mail)

        //LLAMADA AJAX
        const url   = "https://jsonplaceholder.typicode.com/posts"
        const mailJugador =  {obtener_mail}
        $.post(url, mailJugador ,(dato, estado) => {
            if(estado === "success"){
                console.log(`Mail Guardado con exito:${dato.obtener_mail}`);
                resultado()

                }  
            });

        for (let i = 0; i < 5; i++) {
            let x=$(`.fila${i} select`)
    
            for (let j = 0; j < 5; j++) {
             console.log( x[j].value)
             respuestas_matriz.push(x[j].value)
            }
        }
        
        let respuesta_uno=respuestas_matriz.slice(0,5)
        let respuesta_dos=respuestas_matriz.slice(5,10)
        let respuesta_tres=respuestas_matriz.slice(10,15)
        let respuesta_cuatro=respuestas_matriz.slice(15,20)
        let respuesta_cinco=respuestas_matriz.slice(20,25)
    
        errores=[]
    
        comprobacion_rta(respuesta_uno,solucion_uno)
        comprobacion_rta(respuesta_dos,solucion_dos)
        comprobacion_rta(respuesta_tres,solucion_tres)
        comprobacion_rta(respuesta_cuatro,solucion_cuatro)
        comprobacion_rta(respuesta_cinco,solucion_cinco)
    
        $("#modal_div").animate({
        top:"-2000"},
        function(){
        $("#modal_div").css("display","none")
        }) 
    }
    }))
})

   
//-----------------------CHECKBOX LISTA-----------------------

$('.lista input').change(function(){
    if($(this).is(':checked')){
        $(this).parent().css(item_check_css)
        $(this).parent().animate(item_check_animate)
        $(this).parent().animate(item_check_animate2)

    } else {
        $(this).parent().css(item_uncheck_css)
        $(this).parent().animate(item_check_animate)
        $(this).parent().animate(item_check_animate2)
    }
})

//-----------BOTON BORRAR----------

$("#clean_button").click(()=>{
    $('select').val($('select > option:first').val())
})


//---------------DESHABILITAR OPTION----------------

$("select").change(function() {
    var valor=$(this).val()
    $(this).attr("value",valor)

    $('select').each(function(x) {
        $(`select`).find(`option`).prop("disabled",false)
        $(this).addClass(`value_${x}`)
    })

    $('select').each(function(x) { 
        var val_select=$(`.value_${x}`).val()
        $("select").find(`option[value=${valor}]`).prop("disabled",true);   
        if($(`select[value="${val_select}"]`)){
            $(`select`).find(`option[value="${val_select}"]`).prop("disabled",true)
            $(`select`).find(`option[value="none"]`).prop("disabled",false)
        }
        });
})
















});
