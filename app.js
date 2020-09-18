//const argv = require('yargs').argv;

const { argv } = require('./config/yargs')
const { crear, getListado, borrar, actualizar, getListadoCompletado } = require('./toDo/to-do')
const color = require('colors')

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear toDo');
        let tarea = crear(argv.descripcion)
        break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');

        let listado = [];

        console.log(argv.completado);

        if (argv.completado == true) {

            listado = getListadoCompletado();

        } else {

            listado = getListado();

        }

        console.log('==== TO DO ===='.green);
        console.log('');

        for (let tarea of listado) {

            console.log('- ', tarea.descripcion);
            console.log(`   Estado: ${tarea.completado}\n`);

        }

        console.log('==============='.green);

        break;

    case 'actualizar':
        console.log('Actualizar toDo por hacer');

        let actualizado = actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;

    case 'borrar':
        console.log('Borrar toDo');

        let borrado = borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido');
        break;

}