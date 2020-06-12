let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let albumId = objetoQuery.get('id');
console.log(albumId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)

        let imgdelS = document.querySelector('#imgcancion');
        imgdelS.innerHTML += `<img id="imgsong" src="${datos.album.cover}" alt="">`;

        let namedelS = document.querySelector('#namecancion');
       namedelS.innerHTML += `<h3 id="namesong" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.title}</h3>`

       let namedelAR = document.querySelector('#nameart');
       namedelAR.innerHTML += `<h3 id="nameartista" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.artist.name}</h3>`

       let dur = document.querySelector('#duracion');
       dur.innerHTML += `<h3 id="duration" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.duration}</h3>`

       let namedelAL = document.querySelector('#albumname');
       namedelAL.innerHTML += `<h3 id="nameartista" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.album.title}</h3>`
    })
    .catch(function(error){
        console.error(error);
    })
    