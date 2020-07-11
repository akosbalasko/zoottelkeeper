import path = require('path');
import * as fs from 'fs';
import { EOL } from 'os';

export const updateIndexFile = (fileFolder: string): void => {
    const targetFolderName = path.basename(fileFolder);
    const folderEntries = fs.readdirSync(fileFolder);

    const folderNames = folderEntries.filter(
        dirent => fs.lstatSync(path.join(fileFolder, dirent)).isDirectory() && !dirent.startsWith('.'));
    let indexContent = folderNames.map(folderName => `[[000_Index_of_${folderName}]]`).join(EOL) + EOL;

    const filesNames = folderEntries.filter(dirent => fs.lstatSync(path.join(fileFolder, dirent)).isFile() && !dirent.startsWith('.'));
    indexContent += filesNames.map(fileName => `[[${fileName}]]`).join(EOL);
    fs.writeFileSync(path.join(fileFolder, `000_Index_of_${targetFolderName}.md`), indexContent);
};