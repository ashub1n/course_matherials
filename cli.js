import faker from "@faker-js/faker";
import http from 'https';
import fs from 'fs';
import got from 'got';

// let userPhoto = [];
// for (let i = 0; i < 10; i++ ){
//     let image = faker.image.avatar();
    
//     got.stream(image)
//     .pipe(fs.createWriteStream(`./tmp/file-${i}.jpg`))
//     .on('close', function () {
//       console.log('File written!');
//     });
// }

// const http = require('http'); // or 'https' for https:// URLs
// const fs = require('fs');

//const file = fs.createWriteStream("file.jpg");
// const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//    response.pipe(file);

//    // after download completed close filestream
//    file.on("finish", () => {
//        file.close();
//        console.log("Download Completed");
//    });
// });
//https://swapi.dev/

let planets = [];
await http.get('https://swapi.dev/api/planets', (res)=>{
    //response.results.map((v)=>console.log(v));
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
        // console.log(parsedData);
            planets = parsedData.results;
            console.log(planets.map((v)=>v.name))
        } catch (e) {
            console.error(e.message);
        }
    });
})


