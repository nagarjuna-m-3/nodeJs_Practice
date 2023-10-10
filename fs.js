// const {readFileSync,readFile}=require('fs')  // destructure to include only what features we need
const fs=require('fs')

// // read a file in async way (default mode)
// fs.readFile('hi.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     else{
//         console.log(data)
//     }
// })

// read a file in synchronous way

// try {
//     const data=readFileSync('hi.txt','utf-8')
//     console.log(data);
// } catch (error) {
//     console.error(error)
// }
// console.log(`\n Hello world`)

//writing data to files

const writeData='\n loremIPSum dolor sit amet, consectet,dsflag dolor  sit amet, consectet';

// writeFile('hi.txt',newData,{flag:'a'},(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log('content written');
// })

// try {
//     writeFileSync('hi.txt',newData)
//     console.log('data written')
// } catch (error) {
//     console.error(error)
// }

// appendFile('hi.txt',writeData,(err)=>{
// if(err){
//     console.error(err)
//     return 
// }
// else{
//     console.log('data appended');
// }
// })

// fs.rename('script.js','server.js',(err)=>{
// if(err){
//     console.error(err)
//     return 
// }
// else{
//     console.log('file renamed');
// }
// })

// fs.unlink('files.txt',(err)=>{
//     if(err){
//         console.error(err)
//         return 
//     }
//     else{
//         console.log('file deleted');
//     }
//     })


    /**
     * 
     * 
     *  fs module main uses
     * 
     * readfile, readFilesync
     * writeFile, writeFileSyc
     * rename, unlink
     */