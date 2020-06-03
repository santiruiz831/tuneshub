let menu = document.querySelector('#tituloartista');
    let navegacion = document.querySelector('#listadoartistas');
 
    menu.onclick = function () {

    if (navegacion.style.display == 'none') {
        navegacion.style.display = 'grid'
    
    } else {
        navegacion.style.display = 'none';
    }
    }

    let menu2 = document.querySelector('#titulocanciones');
    let navegacion2 = document.querySelector('#listadocanciones');
 
    menu2.onclick = function () {

    if (navegacion2.style.display == 'none') {
        navegacion2.style.display = 'grid';
    } else {
        navegacion2.style.display = 'none';
    }
    }

    let menu3 = document.querySelector('#tituloalbum');
    let navegacion3 = document.querySelector('#listadoalbum');
 
    menu3.onclick = function () {

    if (navegacion3.style.display == 'none') {
        navegacion3.style.display = 'grid';
    } else {
        navegacion3.style.display = 'none';
    }
    }