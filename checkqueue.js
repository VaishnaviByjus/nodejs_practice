// import fs from "fs"
// fs.readFile("file.txt", () => {
//     setImmediate(() => console.log("this is setImmediate inside the read file"));

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
//     console.log("this is readFile 1");
// });

// setTimeout(() => console.log("vaihsnavi"), 0);

setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
    console.log("this is setImmediate 2");
    process.nextTick(() => console.log("this is process.nextTick 1"));
    Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});

setImmediate(() => console.log("this is setImmediate 3"));
