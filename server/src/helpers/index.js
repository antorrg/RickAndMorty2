

const infoCleaner = (data)=>{
    const arr= data.results;
     array = arr.map(char=>{
        
    //const platforms = game.parent_platforms.map((platObj) => platObj.platform.name);
    //const filtGen = game.genres.map(genre => genre.name);

    return{
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        image: char.image,
        gender: char.gender,
        origin: char.origin.name,
        originPlace: char.origin.url,
        location: char.location.name,
        locatPath: char.location.url,
    }
});
  return array;
}


const infoClean2 = (data) => {
    // Si data es un objeto, lo conviérte en un array con un solo elemento.
    const dataArray = Array.isArray(data) ? data : [data];
    // Mapea el array de objetos.
    const resultArray = dataArray.map(game => {
        const platforms = game.parent_platforms.map(platObj => platObj.platform.name);
        const filtGen = game.genres.map(genre => genre.name);

        return {
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: platforms,
            image: game.background_image,
            genres: filtGen,
            released: game.released,
            rating: game.rating,
            createdInDb: false
        };
    });

    // Si data era un objeto, devuelve el primer elemento del resultado.
    if (!Array.isArray(data)) {
        return resultArray[0];
    }

    return resultArray;
};

const cleanGenre = (data)=>{
    const arr = data.results;
    const array = arr.map((genreInfo) => ({ name: genreInfo.name }));
    return array;
}

module.exports = {
    infoCleaner,
    cleanGenre,
    infoClean2 
};

