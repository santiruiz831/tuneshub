
let queryString = window.location.search
console.log(queryString);

let objetoQuery = new URLSearchParams(queryString);
console.log(objetoQuery);


let albumId = objetoQuery.get('id');
console.log(albumId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)

        let imgdelAl = document.querySelector('#imagendelalbum');
        imgdelAl.innerHTML += `<img id="imgalbum" src="${datos.cover}" alt="">`
        ;

        let namedelAl = document.querySelector('#nombredelalbum');
       namedelAl.innerHTML += `<h3 id="namealbum" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.title}</h3>`

        let namedelArt = document.querySelector('#nombredelartista');
        namedelArt.innerHTML += `<h3 id="nameartist" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.artist.name}</h3>`

        let fechdesal = document.querySelector('#fechadesalida');
        fechdesal.innerHTML += `<h3 id="fds" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.release_date}</h3>`
    })
    .catch(function(error){
        console.error(error);
    })
    