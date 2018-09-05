console.time('execution time');
const fs = require('fs');
const path = require('path');

for(let i = 1; i <= 5; i++) {
    let file = `async-text-${i}.txt`;

    fs.writeFile(path.join('./storage', file), "Olá XX SIECOMP!", function (err, out) {
        if (err) throw err;
    });

    if(i === 5) {
        console.timeEnd('execution time');
    }
}