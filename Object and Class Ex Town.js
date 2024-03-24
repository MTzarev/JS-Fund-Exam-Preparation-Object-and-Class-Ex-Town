function towns(input) {
    for (let i = 0; i < input.length; i++) {
        let [city, latitude, longitude] = input[i].split(` | `);
        let formatedLatitude = Number(latitude).toFixed(2);
        let formatedLongitude = Number(longitude).toFixed(2);

        let objectTown = {town: city, latitude: formatedLatitude, longitude: formatedLongitude};
        console.log(typeof objectTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);