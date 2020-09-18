const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

let listadoToDo = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoToDo)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudeo grabar', err);

    })
}

const cargarDB = () => {

    try {

        listadoToDo = require('../db/data.json')

    } catch (error) {
        listadoToDo = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(toDo);
    guardarDB();

    return toDo;
}

const getListado = () => {

    cargarDB();

    return listadoToDo;
}

const getListadoCompletado = () => {

    cargarDB();

    let listaCompletado = []

    for (const tarea of listadoToDo) {

        if (tarea.completado == true) {
            listaCompletado.push(tarea);
        }
    }

    return listaCompletado;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {

        listadoToDo[index].completado = completado;
        guardarDB();

    } else {

        return false;
    }

}

const borrar = (descripcion) => {

    console.log('Funcion borrar');

    cargarDB();

    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {

        listadoToDo.splice(index, 1)
        guardarDB();
        return true;

    } else {

        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoCompletado
}