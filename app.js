require('colors');
const {inquireMenu, pause, readInput,showTasks,showTaskList} = require('./helpers/inquire');
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
                const des = await readInput('descripcion: ')
                tasks.createTask(des) 
                console.log("Task created")
                break;
            case '2': 
                await showTasks(tasks.taskArr, true)
                break;
            case '3' :
                await showTasks(tasks.taskArr, false, true)
                break;
            case '4' :
                await showTasks(tasks.taskArr, false, false)
                break;
            case '5':
                const selected = await showTaskList(tasks.taskArr,  false)
                tasks.completeTask(selected)
                console.log("Task Complete")
                break;
            case '6':
                const selectedtodelete = await showTaskList(tasks.taskArr,  false)
                tasks.deleteTask(selectedtodelete)

                break;
            default:
                break;
        }
        await pause();    
    } while (opt !=='0' );
}

main();