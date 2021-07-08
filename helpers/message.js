const { resolve } = require('path');

require('colors');

const showMenu=()=>{
    
    return new Promise(resolve=>{
        console.clear();
        console.log(":::::::::::::::::::".green);
        console.log(" Select option".green);
        console.log(":::::::::::::::::::\n".green);
        console.log(`${'1.'.green} Create ToDo`);
        console.log(`${'2.'.green} Show ToDo list`);
        console.log(`${'3.'.green} Show completed ToDo list`);
        console.log(`${'4.'.green} Show pending ToDo list`);
        console.log(`${'5.'.green} Finalize task`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Quit\n`);
        const readLIne = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLIne.question('select option ', (opt)=>{
            readLIne.close();
            resolve(opt)
        })
    })
    
};

const pause=()=>{
    return new Promise(resolve=>{
        const readLIne = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLIne.question(`Press ${'Enter'.green} to continue`, (opt)=>{
            readLIne.close();
            resolve();
        })
    })
    
}

module.exports = {
    showMenu,
    pause

};