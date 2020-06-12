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

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + artistId + '/top')
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(dato){
        console.log(dato.data)

        let song = dato.data
        console.log(song)

        let cancion = document.querySelector('#topfive');
        let cancions = document.querySelector('#topfives');
       
        song.forEach(function(dataArtist){
            cancion.innerHTML += `<div id="widget"> <iframe id="frame"; scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=400&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${dataArtist.id}&app_id=1" width="400" height="90"></iframe>
            <div id="boton"><a href="/EXPLORAR/detCANCION/CANCION.html?id=${dataArtist.id}"  style="text-decoration: none;color:black"><p id="mas">VER MAS</p></a></div></div>`  
            
            
    
            cancions.innerHTML += `<div id="widget"> <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=${dataArtist.id}&app_id=1" width="300" height="300"></iframe>
            <div id="boton"><a href="/EXPLORAR/detCANCION/CANCION.html?id=${dataArtist.id}"  style="text-decoration: none;color:black"><p id="mas">VER MAS</p></a></div></div>`
        })

    })
    .catch(function(error){
        console.error(error);
    })

