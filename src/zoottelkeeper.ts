/* istanbul ignore file */
import * as minimist from 'minimist';
import * as fs from 'fs';
import * as path from 'path';
import * as watchr from 'watchr';

import { CmdOptions } from './CmdOptions';
import { updateIndexFile } from './updateIndexFile';
// Import the watching library

const argv = minimist(process.argv.slice(2));

const options: CmdOptions = {
    rootFolder: path.join(__dirname, argv['rootFolder']),
};
// tslint:disable-next-line:no-console
console.log(`hello, rootFolder is ${options.rootFolder} ...waiting...`);

// Define our watching parameters
const deleteListener = (changeType: any, fullPath: any, currentStat: any, previousStat: any) => {
    switch (changeType) {
        case 'delete':
                        // tslint:disable-next-line:no-console
            console.log('the file', fullPath, ' changed', previousStat);
            const pathArray = fullPath.split(path.sep);
            pathArray.pop();
            const fullParentFolderpath = pathArray.join(path.sep);
            
            updateIndexFile(fullParentFolderpath);
            break;
        default:
                        // tslint:disable-next-line:no-console
            console.log('default cade', previousStat);
            break;
    }
};
// Define our watching parameters
const createListener = (changeType: any, fullPath: any, currentStat: any, previousStat: any) => {
    switch (changeType) {
        case 'create':
                        // tslint:disable-next-line:no-console
            console.log('the file', fullPath, ' changed', previousStat);
            const pathArray = fullPath.split(path.sep);
            pathArray.pop();
            const fullParentFolderpath = pathArray.join(path.sep);
            updateIndexFile(fullParentFolderpath);
            break;
        default:
                        // tslint:disable-next-line:no-console
            console.log('default cade', previousStat);
            break;
    }
};
const next = (err: any) =>  {
    if (err) {
        // tslint:disable-next-line:no-console
        return console.log('watch failed on', options.rootFolder, 'with error', err);
    }
    // tslint:disable-next-line:no-console
    console.log('watch successful on', options.rootFolder);
}


// Watch the path with the change listener and completion callback
const deleteStalker = watchr.open(options.rootFolder, deleteListener, next).setConfig({
    ignoreHiddenFiles: true,
});
;
const createStalker = watchr.open(options.rootFolder, createListener, next).setConfig({
    ignoreHiddenFiles: true,
});
;
