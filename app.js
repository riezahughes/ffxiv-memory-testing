const memoryjs = require('memoryjs');

const processName = "ffxiv_dx11.exe";
let ffxiv_process_id;
let ffxiv_parent_process_id;
let ffxiv_process_handle;

const processArray = memoryjs.getProcesses();
for(x=0; x<processArray.length; x++){
    if(processArray[x].szExeFile == processName){
        ffxiv_process_id = processArray[x].th32ProcessID;
        ffxiv_parent_process_id = processArray[x].th32ParentProcessID;
    }
}

const value = memoryjs.openProcess(ffxiv_process_id)

ffxiv_process_handle = value.handle;

let checkmemory = memoryjs.readMemory(ffxiv_process_handle, "0x8", "int")
//console.dir(value);
console.log(checkmemory)
//const buffer = memoryjs.readBuffer()