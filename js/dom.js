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
    $("#contenedor_tabla").append(tabla)
}

let boton_enviar=document.createElement("button")
boton_enviar.setAttribute("id",`boton_comprobar`)
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

function create_modal_mail() {
    let div_modal=document.createElement("div")
    div_modal.setAttribute("id","modal_mail")
    div_modal.setAttribute("class","modalContainer")
    div_modal.innerHTML="<form id=form_mail class=modal-content><span class=close>x</span><h2>Ingrese su email para ver la solución</h2><input class=email type=email id=email name=email required=required><button type=submit>Enviar</button></form>"
    tabla.appendChild(div_modal)
}

var inp=$(`#modal_mail input`)

//-------MODAL JUGADOR-----
function create_modal_datosIncompletos() {
    let modal_error_datos=document.createElement("div")
    modal_error_datos.setAttribute("id","error_datos")
    modal_error_datos.setAttribute("class","modalContainer")
    modal_error_datos.innerHTML="<div class=modal-content><span class=close>x</span><h2>Ingrese los datos para poder jugar</h2></div>"
    form_datos.appendChild(modal_error_datos)
}


//-----MODAL LOST----
function create_modal_lost() {
    let modal_lost=document.createElement("div")
    modal_lost.setAttribute("id","modal_lost")
    modal_lost.setAttribute("class","modalContainer")
    modal_lost.innerHTML=`<div class=modal-content><h2>Lo siento ${nuevo_jugador.nombre.toUpperCase()} ${nuevo_jugador.apellido.toUpperCase()}, perdiste   <i class="bi bi-emoji-frown"></i></h2><button id=reintentar type=reset>Jugar de nuevo</button></div>`
    mi_tabla.appendChild(modal_lost)
}



//-----MODAL WIN----
function create_modal_win() {
    let modal_win=document.createElement("div")
    modal_win.setAttribute("id","modal_win")
    modal_win.setAttribute("class","modalContainer")
    modal_win.innerHTML=`<div class=modal-content><span class=close>x</span><h2>Felicitaciones ${nuevo_jugador.nombre.toUpperCase()}, ganaste!!   <i class="bi bi-emoji-smile"></i></h2></div>`
    mi_tabla.appendChild(modal_win)
}


//----------ITEMS LIST-----------------
function create_itemList() {
    let lista=document.createElement("ul")
    $("section").prepend(lista)

        items_list.forEach((element,index)=>{
            let item_lista=document.createElement("li")
            item_lista.innerHTML=`<input type="checkbox"class="casilla">${element}`
            item_lista.setAttribute("class",`lista item_${index}`)
            lista.append(item_lista)
    })
}








