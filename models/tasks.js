
const Task = require('./task');
const {saveData} = require('./../helpers/saveFile');
/**
 * _list :
 *      {uuid-1234: {id:12, description: "example", completeDate: 2020/5/5}}
 * 
 */

class Tasks {
    _list = {}
    _task = []
    constructor(){
        this._list = {}
    }

    get taskArr(){
        const tasks = [];
        Object.keys(this._list).forEach(key=>{
            const task= this._list[key];
            tasks.push(task)
        });  
        return tasks
    }

    uploadData(tasks){
        this._list = tasks;
    }

    createTask(description=""){
        const task = new Task(description);
        this._list[task.id] = task;
        saveData(this._list)
    }   

    
}

module.exports= Tasks;
