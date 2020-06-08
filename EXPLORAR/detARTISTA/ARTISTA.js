let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let artistId = objetoQuery.get('id');
console.log(artistId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + artistId)
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(datos){

        console.log(datos)

        let imgdelAr = document.querySelector('#imagendelartista');
        imgdelAr.innerHTML += `<img id="imgartista" src="${datos.picture}" alt="">`;

        let namedelAR = document.querySelector('#nombredelartista');
       namedelAR.innerHTML += `<h3 id="nameartista" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.name}</h3>`

       let fans = document.querySelector('#numerodefans');
       fans.innerHTML += `<h3 id="fans" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.nb_fan}</h3>`
    })
    .catch(function(error){
        console.error(error);
    })