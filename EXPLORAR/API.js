fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        //trabajo con los datos
        let albums = datos.albums.data;
        let artistas = datos.artists.data;
        let canciones = datos.tracks.data;
        console.log( datos.tracks.data)
        console.log(datos.artists.data)
    let artistsContenedor = document.querySelector('.esqueletosegunartista');
    artistas.forEach(function(dataArtist){
    artistsContenedor.innerHTML += `    <a href="detARTISTA/ARTISTA.html?id=${dataArtist.id}" style="text-decoration: none;" ><div id:"artistas"  style="display: flex;margin-top:20px">
        <img style="border-radius: 50%;width:50px ;" src="${dataArtist.picture_medium}" alt="">
        <h3 style="color: blueviolet; margin: auto;margin-left: 10px;">${dataArtist.name}</h3>
        </div></a>`
    });

    let tracksContenedor = document.querySelector('#esqueletocancion');
        canciones.forEach(function(dataCancion){
            console.log(dataCancion)
            tracksContenedor.innerHTML += ` <div>
            <iframe id="track" scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=tracks&id=` +dataCancion.id +`&app_id=1"></iframe></div>
            <div id="boton"><a href="/EXPLORAR/detCANCION/CANCION.html?id=${dataCancion.id}"  style="text-decoration: none;color:black"><p id="mas">VER MAS</p></a></div> `
    });



    let albumsContenedor = document.querySelector('.esqueletoalbum');
    albums.forEach(function(dataAlbum){
    albumsContenedor.innerHTML += `     <a href="detAlbum/ALBUM.html?id=${dataAlbum.id}" style="text-decoration: none;"><div id:"album"  style="display: flex;margin-top:20px">
    <img style="border-radius: 50%;width:50px ;" src="${dataAlbum.cover_medium}" alt="">
    <h3 style="color: red; margin: auto;margin-left: 10px;">${dataAlbum.title}</h3></div></a>`

    });

     })
     
     .catch(function(error){
        console.error(error);
    })
