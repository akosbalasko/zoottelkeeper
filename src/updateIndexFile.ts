import path = require("path");

import * as fs from 'fs';

export const updateIndexFile = (fileFolder: string): void => {
    const folderName = path.basename(fileFolder);
    // tslint:disable-next-line:no-console
    console.log(`fileFolder: ${fileFolder}, folderName: ${folderName}`);
    const folderEntries = fs.readdirSync(fileFolder);

    // tslint:disable-next-line:no-console
    console.log(`folderEntries: ${JSON.stringify(folderEntries)}`);
    const filesNames = folderEntries.filter(dirent => fs.lstatSync(path.join(fileFolder,dirent)).isFile());
    // tslint:disable-next-line:no-console
    console.log(`filesNames nondir:  ${filesNames}`);

    const indexContent = filesNames.map(fileName => `[[${fileName}]]`).join('\n');
    // tslint:disable-next-line:no-console
    console.log(`indexContent: ${indexContent}`);

    fs.writeFileSync(path.join(fileFolder, `000_Index_of_${folderName}.md`), indexContent);
};