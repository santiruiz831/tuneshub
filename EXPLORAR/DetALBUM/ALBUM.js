let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let albumId = objetoQuery.get('id');
console.log(albumId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

        console.log(datos)

        let imgdelAl = document.querySelector('#imagendelalbum');
        imgdelAl.innerHTML += `<img id="imgalbum" src="${datos.cover}" alt="">`;

        let namedelAl = document.querySelector('#nombredelalbum');
       namedelAl.innerHTML += `<h3 id="namealbum" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.title}</h3>`

        let namedelArt = document.querySelector('#nombredelartista');
        namedelArt.innerHTML += `<h3 id="nameartist" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.artist.name}</h3>`

        let fechdesal = document.querySelector('#fechadesalida');
        fechdesal.innerHTML += `<h3 id="fds" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.release_date}</h3>`

        let playlist = document.querySelector('#canciones');
        playlist.innerHTML += `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=20000&height=350&color=007FEB&layout=dark&size=medium&type=album&id=`+albumId+`&app_id=1" width="20000" height="350"></iframe>`
        
        let phone = document.querySelector('#phonesongs');
        phone.innerHTML += `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=album&id=`+ albumId+`&app_id=1" width="300" height="300"  "backgroundcolor:"></iframe>`


    })
    .catch(function(error){
        console.error(error);
    })
    