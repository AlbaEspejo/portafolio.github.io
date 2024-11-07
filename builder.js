const ncp = require("ncp").ncp;
const mainRoute = "build";
const fs = require('fs');

copyFolder("js");
copyFolder("css");
copyFolder("img");
copyFolder("p-trabajos");
copyFolder("trabajos");

copyFile("function.js");
copyFile("index.html");

function copyFolder(folder) {
    ncp(folder, combine(folder), function (err) {
        if (err) {
          return console.error(err);
        }
        console.log("Carpeta copiada exitosamente.");
      });
}

function copyFile(folder) {
    fs.copyFile(folder, combine(folder), (err) => {
        if (err) {
          return console.error('Error al copiar el archivo:', err);
        }
        console.log('El archivo se ha copiado correctamente.');
      });
}


function combine(path) {
    return mainRoute + '/' + path
}
