//-----------------TABLA------------------------
let tabla = document.createElement("table")
tabla.setAttribute("id",`mi_tabla`)

    let encabezados=document.createElement("tr")
    fila_encabezado.forEach((element) =>{
        let nuevo_th=document.createElement("th")
        nuevo_th.innerHTML=`<th>${element}</th>`
        encabezados.appendChild(nuevo_th)
    }
)
tabla.appendChild(encabezados)

for (let i = 0; i < 5; i++) {
    tr_new=document.createElement("tr")
    tr_new.classList.add(`fila${i}`)
    tabla.appendChild(tr_new)

    create_fila(JSON.parse(json_paises))
    create_fila(JSON.parse(json_colores))
    create_fila(JSON.parse(json_mascotas))
    create_fila(JSON.parse(json_bebidas))
    create_fila(JSON.parse(json_cigarros))
    let verificacion=document.createElement("button")
    verificacion.setAttribute("id",`check_fila_${i}`)
    verificacion.setAttribute("class",`check_fila`)
    verificacion.innerHTML=`probar`
    tr_new.appendChild(verificacion)
    $("#contenedor_tabla").append(tabla)
}

let boton_enviar=document.createElement("button")
boton_enviar.setAttribute("id",`send_button`)
boton_enviar.setAttribute("class","btnModal")
boton_enviar.innerHTML=`Comprobar`
tabla.appendChild(boton_enviar)

let boton_borrar=document.createElement("button")
boton_borrar.setAttribute("id",`clean_button`)
boton_borrar.setAttribute("type",`reset`)

boton_borrar.setAttribute("class","btnModal")
boton_borrar.innerHTML=`Borrar`
tabla.appendChild(boton_borrar)


//-------------MODAL MAIL--------------

let div_modal=document.createElement("div")
div_modal.setAttribute("id","modal_div")
div_modal.setAttribute("class","modalContainer")
div_modal.innerHTML="<form class=modal-content><span class=close>x</span><h2>Ingrese su email para ver la solución</h2><input class=email type=email id=email name=email><button type=submit>Enviar</button></form>"
tabla.appendChild(div_modal)


//-------MODAL COMPLETAR DATOS-----
let modal_error_datos=document.createElement("div")
modal_error_datos.setAttribute("id","error_datos")
modal_error_datos.setAttribute("class","modalContainer")
modal_error_datos.innerHTML="<div class=modal-content><span class=close>x</span><h2>Ingrese los datos para poder jugar</h2></div>"
form_datos.appendChild(modal_error_datos)

//-----MODAL LOST----
let modal_lost=document.createElement("div")
modal_lost.setAttribute("id","modal_lost")
modal_lost.setAttribute("class","modalContainer")
modal_lost.innerHTML=`<div class=modal-content><span class=close>x</span><h2>Lo siento, perdiste!</h2></div>`
mi_tabla.appendChild(modal_lost)


//-----MODAL WIN----
let modal_win=document.createElement("div")
modal_win.setAttribute("id","modal_win")
modal_win.setAttribute("class","modalContainer")
modal_win.innerHTML=`<div class=modal-content><span class=close>x</span><h2>Felicitaciones, ganaste!!</h2></div>`
mi_tabla.appendChild(modal_win)



//----------ITEMS LIST-----------------

let lista=document.createElement("ul")
$("section").prepend(lista)

    items.forEach((element,index)=>{
        let item_lista=document.createElement("li")
        item_lista.innerHTML=`<input type="checkbox"class="casilla">${element}`
        item_lista.setAttribute("class",`lista item_${index}`)
        lista.append(item_lista)
    })

///--------------SELECT--------------------------------






