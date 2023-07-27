import crypto from "crypto";

const max_calls = 3;

const start = Date.now();

for(let i = 0; i < max_calls;  i++){
    crypto.pbkdf2("password", "salt",10000, 512, "sha512", () => {
        console.log(`hash: ${i+1}`, Date.now() - start);
    })
}