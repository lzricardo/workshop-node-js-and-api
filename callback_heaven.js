const fs = require('fs');

let readDirectory = function () {
    fs.readdir(__dirname, function (err, directory) {
        if (err) throw err;

        directory.forEach(function (file) {
            read(file);
        });
    });
};

let read = function (file) {
    let path = `./${file}`;

    fs.stat(path, function (err, stat) {
        if (err) throw err;

        if (stat.isFile()) {
            console.log('%s %d bytes', file, stat.size);
        }
    });
};

readDirectory();