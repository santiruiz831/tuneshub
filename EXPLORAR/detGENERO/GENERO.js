let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let GenreId = objetoQuery.get('id');
console.log(GenreId);

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + GenreId)
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(datos){
        console.log(datos)

        let imgdelG = document.querySelector('#fotogenero');
        imgdelG.innerHTML += `<img id="imggen" src="${datos.picture_medium}" alt="">`;

        let namedelG = document.querySelector('#nombregenero');
       namedelG.innerHTML += `<h3 id="namegen" style="color: blueviolet; margin: auto;margin-left: 10px;">${datos.name}</h3>`



    })
    .catch(function(error){
        console.error(error);
})


fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/'+ GenreId + '/artists')
    .then(function(respuesta){
        return respuesta.json();
    })

    .then(function(art){

        let artistas = art.data

    console.log(art)
    console.log(art.data)
    console.log(artistas)
    let namedelAR = document.querySelector('#diez');
    let imgdelAr = document.querySelector('#diezf'); 

    var contar= 1;
    
    for(dataArtist of artistas){

        contar = contar + 1;
        namedelAR.innerHTML += `<div id=esqueleto><a href="../detARTISTA/ARTISTA.html?id=${dataArtist.id}" id="artistas" style="text-decoration: none;" >
        <div   style="display: flex;margin-top:20px">
        <img style="border-radius: 50%; width:50px ;" src="${dataArtist.picture_medium}" alt="">
        <h3 style="color: blueviolet; margin: auto;margin-left: 10px;">${dataArtist.name}</h3>
        </div></a></div>`


    if (contar > 10){
        break;
        
    }
    }
    })
    .catch(function(error){
        console.error(error);
    })