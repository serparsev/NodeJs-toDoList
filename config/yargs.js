const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}


const argv = require('yargs')
    .command('crear', 'Crea un elemento toDo', {
        descripcion

    }).command('actualizar', 'Actualiza el estado de un toDo', {
        descripcion,
        completado

    }).command('borrar', 'Borra un elemento toDo', {
        descripcion

    }).command('listar', 'Lista los toDo', {
        completado: {
            desc: 'Lista los elementos de la lista toDo que estan completados',
            alias: 'c'
        }
    })
    .help()
    .argv



module.exports = {
    argv
}