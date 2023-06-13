import * as fs from 'fs';

function main() {
    // @ts-ignore
    console.log('Hello world!');
    // @ts-ignore
    fs.writeFile('./test.txt', 'hello world in a file', err => {
        if (err) {
            // @ts-ignore
            console.error(err);
        }
        // fichier écrit avec succès
    });
}

main();
