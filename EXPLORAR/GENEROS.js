console.log("aa")

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
    let genre = datos.data;
    console.log(genre);

    let esqueleto = document.querySelector('.esqueletogenero');

    genre.forEach(function(dataGenre){
        esqueleto.innerHTML +=  `<a href="/EXPLORAR/detGENERO/GENERO.html?id=${dataGenre.id}" style="text-decoration: none;"><div style="margin-bottom: 20px;"><img id="fotogenero"; style="margin-right: auto; display:block; border-radius: 30%;margin-left: auto;" src="`+ dataGenre.picture_medium +`" alt="">
        <h2 id="nombregen" style="color: aliceblue;font-family: 'Poppins', sans-serif;
        text-align: center; margin-bottom:20px ;font-size: 17px">`+dataGenre.name +`</h2></div></a>`
    })

    

});