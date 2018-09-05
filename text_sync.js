console.time('execution time');
const fs = require('fs');
const path = require('path');

for(let i = 1; i <= 5; i++) {
    let file = `sync-text-${i}.txt`;

    fs.writeFileSync(path.join('./storage', file), "Olá XX SIECOMP!");
}
console.timeEnd('execution time');