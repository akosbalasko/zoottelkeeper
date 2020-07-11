import path = require('path');
import * as fs from 'fs';
import { EOL } from 'os';

export const updateIndexFile = (fileFolder: string): void => {
    const folderName = path.basename(fileFolder);
    const folderEntries = fs.readdirSync(fileFolder);

    const filesNames = folderEntries.filter(dirent => fs.lstatSync(path.join(fileFolder, dirent)).isFile());
    const indexContent = filesNames.map(fileName => `[[${fileName}]]`).join(EOL);
    fs.writeFileSync(path.join(fileFolder, `000_Index_of_${folderName}.md`), indexContent);
};