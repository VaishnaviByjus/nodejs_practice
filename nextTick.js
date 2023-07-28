console.log('console.log 1');
process.nextTick(() => console.log("this is processs.next 1"));
console.log("console.log 2");