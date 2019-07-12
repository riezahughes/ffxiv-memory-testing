var edge = require('edge-js');

var helloWorld = edge.func(`
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`);

helloWorld('JavaScript', function (error, result) {
    if (error) throw error;
    console.log(result);
});


//memory.js attempts


// const memoryjs = require('memoryjs');

// //set for dx11 client
// const processName = "ffxiv_dx11.exe";

// //check all processes to see if it's actually running
// let processArray = memoryjs.getProcesses();

// let foundProcess = false;
// for(x=0; x<processArray.length; x++){
//     if(processArray[x].szExeFile == processName){
//         foundProcess = true;
//     }
// }

// if(!foundProcess){
//     return console.log("** FFXIV is not running. Please boot the game in order to use application** ");
// }

// //open the individual process
// const processObject = memoryjs.openProcess(processName);
// console.dir(processObject);

// //set simple cariables from id
// const ffxiv_process_id = processObject.th32ProcessID;
// const ffxiv_parent_process_id = processObject.th32ParentProcessID;
// const ffxiv_process_handle = processObject.handle;

// //read mememory location of ffxiv
// let test = memoryjs.readMemory(ffxiv_process_handle, "2C08BEE2792", memoryjs.STRING);

// //log results
// console.dir(JSON.stringify(test, null, 4));