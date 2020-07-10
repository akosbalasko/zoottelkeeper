import * as  assert from 'assert';
import * as fs from 'fs';
import path = require('path');

import { updateIndexFile } from './../src/updateIndexFile';
describe('filename', () => {
    it('filename returned', () => {
        updateIndexFile(path.resolve('./testRootFolder'));
    });

});