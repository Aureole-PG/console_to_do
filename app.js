require('colors');
const {inquireMenu, pause, readInput,showTasks} = require('./helpers/inquire');
const Tasks = require('./models/tasks');
const {readData} = require('./helpers/saveFile');
const main = async()=>{
    let opt = "";
    const tasks = new Tasks();
    const tasksSaved = readData();
    if (tasksSaved) {
        tasks.uploadData(tasksSaved);
    }
    do {
        opt = await inquireMenu();
        switch (opt) {
            case '1':
                const des= await readInput('descripcion: ')
                tasks.createTask(des) 
                console.log("Task created")
                break;
            case '2': 
                await showTasks(tasks.taskArr, true)
                break;
            case '3' :
                await showTasks(tasks.taskArr, false, true)
                break;
            case '3' :
                await showTasks(tasks.taskArr, false, false)
                break;
            default:
                break;
        }
        // console.log(task)
        // tasks._list[task.id]= task
        // console.log(tasks)
        await pause();    
    } while (opt !=='0' );
}

main();