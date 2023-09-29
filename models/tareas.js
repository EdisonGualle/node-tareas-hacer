
const Tarea = require('./tarea')

class Tareas {
    _listado = {};

    get listadoArr(){
        const listado =[];
        //esto me regresa un arreglo de todas las llaves que todo tiene el objeto
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea ( id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }
    crearTarea( desc= ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea=> {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto(){
        console.log();
        this.listadoArr.forEach((tarea,i)=>{
        const idx =`${i+1}`.yellow;
        const {desc,completadoEn} = tarea;
        const estado =(completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red;
        console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    listarPendientesCompletadas(completas = true){
        console.log();
        let contador = 0;
        this.listadoArr.forEach((tarea)=>{
        const {desc,completadoEn} = tarea;
        const estado =(completadoEn)
                            ? 'Completada'.green
                            : 'Pendiente'.red;
        if(completas){
            if(completadoEn){
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${completadoEn.yellow}`)
            }
        }else{
            if(!completadoEn){
                contador += 1;
                console.log(`${(contador + '.').green} ${desc} :: ${estado}`)
        }
        }});
    }

    toggleCompletadas(ids = []){
        ids.forEach(id=>{
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toDateString();
            }
        });

        this.listadoArr.forEach(tarea=>{
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn=null;
            }
        })
    }
}

module.exports= Tareas;