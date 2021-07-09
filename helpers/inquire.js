const inquire= require('inquirer');
require('colors');

const menuOptions=[
    {
        type: 'list', 
        name: 'options', 
        message:'¿?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create ToDo`
            },
            {
                value: '2',
                name: `${'2.'.green} Show ToDo list`
            },
            {
                value: '3',
                name: `${'3.'.green} Show completed ToDo list`
            },
            {
                value: '4',
                name: `${'4.'.green} Show pending ToDo list`
            },
            {
                value: '5',
                name: `${'5.'.green} Finalize task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Quit`
            },
        ]
    }   
];

const inquireMenu = async() => {
    console.clear();
    console.log(":::::::::::::::::::".cyan);
    console.log(" Select option".green);
    console.log(":::::::::::::::::::\n".cyan);
    const {options} = await inquire.prompt(menuOptions);
    return options
}

const pause = async()=>{
    const uwu= await inquire.prompt({
        type: 'input',
        name: `Press ${'Enter'.green} to continue`
    })
    console.log('\n')
    return uwu
}

const readInput = async(message)=>{
    const question=[
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length===0) {
                    return 'Please add some value';
                }
                return true
            }
        }
    ];
    const {desc} = await inquire.prompt(question)

    return desc
}

const showTaskList = async (array=[], complete=true)=>{
    var filter = []
    if (complete) {
        filter= array.filter(e=> e.completeDate !== null);
    } else {
        filter= array.filter(e=> e.completeDate === null);
    }
    const list = await inquire.prompt([{
        type: 'rawlist', 
        name: 'List', 
        message:'¿?',
        choices: filter.map(e=>({
            value: e.id, 
            name: `${e.description}` 
        }) )
    }])
    const {List} = list;
    return List
}

const showTasks = async (array=[], all = false , completed= true)=> {
    var filter = array;
    if (!all) {
        if (completed) {
            filter= array.filter(e=> e.completeDate !== null);
        } else {
            filter= array.filter(e=> e.completeDate === null);
        }
    }
    filter.forEach((e, index)=>{
        const  {description, completeDate} = e;
        const state= (completeDate)
                            ?'Complete'.green
                            :'incomplete'.red;
        console.log(`${index+1} ${description} ${all?':: '+state:''}`)
    })
}

module.exports= {
    inquireMenu,
    pause,
    readInput,
    showTasks,
    showTaskList
}