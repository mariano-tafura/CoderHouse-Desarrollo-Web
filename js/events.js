//--------TITULO------
$( document ).ready(function() {
    
    $(".container").slideDown(2000)

    //Modal ingreso de Email - creacion y enventos asociados
    create_modal_mail()

     $("#modal_mail .close").click(()=>{
        $("#modal_mail").animate({
            left:"-2000",
            top:"-2000"
        })

        $("#modal_mail").css("display","none")
    })
    
    $("#form_mail").submit((function(e){
        e.preventDefault()

            var mailJugador=$("#email").val()

            //LLAMADA AJAX
            const url  = "https://jsonplaceholder.typicode.com/posts"
            $.post( url, {mailJugador, get_nombre, get_apellido})
            .done(function(  ) {
                console.log("Datos enviados con exito")
            })
            .fail(function() {
                console.log( "Error al enviar los datos" );
            })

            for (let i = 0; i < 5; i++) {
                let x=$(`.fila${i} select`)
            
                for (let j = 0; j < 5; j++) {
                    // console.log( x[j].value)
                    respuestas_matriz.push(x[j].value)
                }
            }
            
            let respuesta_uno=respuestas_matriz.slice(0,5)
            let respuesta_dos=respuestas_matriz.slice(5,10)
            let respuesta_tres=respuestas_matriz.slice(10,15)
            let respuesta_cuatro=respuestas_matriz.slice(15,20)
            let respuesta_cinco=respuestas_matriz.slice(20,25)


            comprobacion_rta(respuesta_uno,solucion_uno)
            comprobacion_rta(respuesta_dos,solucion_dos)
            comprobacion_rta(respuesta_tres,solucion_tres)
            comprobacion_rta(respuesta_cuatro,solucion_cuatro)
            comprobacion_rta(respuesta_cinco,solucion_cinco)

            $("#modal_mail").fadeOut(400)
            // $("#modal_mail").delay(600)

            resultado()
    
    }))

    //Modal Perdedor - creacion y enventos asociados
    create_modal_lost()
    
    $(`.reintentar`).click(()=>{
        $('select').val($('select > option:first').val())
        $(`select`).find(`option`).prop("disabled",false)
        $(".lista input").removeAttr("checked")
        $(".lista").css(item_uncheck_css)
        $(".lista").animate(item_check_animate)
        $(".lista").animate(item_check_animate2)
        $(`select option`).css("color","green")
        $("#modal_lost").css("display","none")
    })
        
    //Modal Ganador - creacion y enventos asociados
    create_modal_win()

       
    $("#modal_win .close").click(()=>{
        $("#modal_win").animate({
        bottom:"-2000"},
        function(){
        $("#modal_win").css("display","none")
        })
    })

    //Modal Creador de Instrucciones - creacion y enventos asociados
    create_itemList()
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
    
    
    //Efectos pantalla inicial
    $(".container").mouseover(function(){
        $(`.titulo`).css({"display":"flex","background-size":"0% 0%",
        "color":"black",})  
        $(".titulo_pez").fadeIn(1000)
    })


    $(".titulo_pez").mouseover(function(){
        $(".titulo_pez").fadeOut("slow")
                    .fadeIn(1000)
    })



    //---------------BOTON PLAY-----------------------
    $("#form_datos").submit((e)=>{
        e.preventDefault()

        $("form").hide(500)
        $("#boton_play").hide(1000)
        $(`.lista`).slideToggle(1500)
        $("#contenedor_tabla").show(2500)    

        var value_nombre=$("#nombre").val()
        var value_apellido=$("#apellido").val()
        localStorage.setItem("Nombre", value_nombre)
        localStorage.setItem("Apellido", value_apellido)
    })

    //-------BOTON DE COMPROBACION-----------------------

    $("#boton_comprobar").click(()=>{

        $("#modal_mail").css("display","block")
        $("#modal_mail .modal-content").css("display","block")


        $("#modal_mail").animate({
            left:"0",
            top:"0",                 
        })

    })



    //-----------BOTON BORRAR----------

    $("#clean_button").click(()=>{
        $('select').val($('select > option:first').val())
        $(`select`).find(`option`).prop("disabled",false)
        $(".lista input").removeAttr("checked")
        $(".lista").css(item_uncheck_css)
        $(".lista").animate(item_check_animate)
        $(".lista").animate(item_check_animate2)
        $(`select option`).css("color","green")
    })


    //---------------DESHABILITAR OPTION ELEGIDA EN TABLA----------------

    $("select").change(function() {
        var valor=$(this).val()
        $(this).attr("value",valor)

        $('select').each(function(x) {
            $(`select`).find(`option`).prop("disabled",false)
            $(`select option`).css("color","green")
            $(this).addClass(`value_${x}`)
        })

        $('select').each(function(x) { 
            var val_select=$(`.value_${x}`).val()
            $("select").find(`option[value=${valor}]`).prop("disabled",true) 
    
            if($(`select[value="${val_select}"]`)){
                $(`select`).find(`option[value="${val_select}"]`).prop("disabled",true)
                $(`select`).find(`option[value="none"]`).prop("disabled",false)
                $(`select`).find(`option[disabled]`).css(color_option)   

                }      
            })
    })

})
