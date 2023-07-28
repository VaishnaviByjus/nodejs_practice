import fs from "fs"
fs.readFile("file.txt", () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

setTimeout(() => console.log("vaihsnavi"), 0);
setImmediate(() => console.log("this is setImmediate 1"), 15000);