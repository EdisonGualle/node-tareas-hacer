require('colors');


const mostrarMenu = () =>{

    return new Promise((resolve) => {
        console.clear();
        console.log('======================='.yellow);
        console.log(' Seleccione una opcion ');
        console.log('=======================\n'.yellow);
        console.log(`${'1.'.yellow} Crear tarea`);
        console.log(`${'2.'.yellow} Listar tareas`);
        console.log(`${'3.'.yellow} Listar tareas completas`);
        console.log(`${'4.'.yellow} Listar tareas pendientes`);
        console.log(`${'5.'.yellow} Completar tarea(s)`);
        console.log(`${'6.'.yellow} Borrar tarea`);
        console.log(`${'0.'.yellow} Salir\n`);
        
    
            //preparamos la interfaz que le presentamos al usuario
            const readLine = require('readline').createInterface({
                input:process.stdin, //espera unos calacteres 
                output: process.stdout //mostrar al usuario 
            });
            //wuestion es si se necesita el stdout para mostrar al usuario la pregunta 
            readLine.question('Seleccione una opcion: ', (opt) =>{
                readLine.close();
                resolve(opt);
            })
    })
   
    }

const pausa =()=> {
  return new Promise((resolve, reject) => {
    const readLine = require('readline').createInterface({
        input:process.stdin, //espera unos calacteres 
        output: process.stdout //mostrar al usuario 
    });
    readLine.question( `\nPresione ${'Enter'.green} para continuar\n`, (opt) =>{
        readLine.close();
        resolve();
      })
  })
}




module.exports = {
    mostrarMenu,
    pausa
}