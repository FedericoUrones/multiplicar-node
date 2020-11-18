// requireds
const fs = require('fs');
// hay 3 tipos de require. El de arriba es una lib de node
// const fs = require('express'); <-- lib externa
// const fs = require('./zaraza'); <-- archivos que creamos en el proyecto

var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=============================='.green)
    console.log(`tabla de ${ base }`.green)
    console.log('=============================='.green)
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }

}

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {

        if ( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un número`)
            return
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data +=`${base} * ${i} = ${i * base}\n`
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        
            if (err) 
                reject(err)
            else 
                resolve (`tabla-${ base }-al-${ limite }.txt`)
        });
    } )
}

module.exports = {
    crearArchivo,
    listarTabla
}
// tmb se podría haber hecho: module.exports.crearArchivo = (base) ....