
import fs from 'fs';
import path from 'path';

const dir = 'public/new_images';

const files = fs.readdirSync(dir);

for (const file of files) {
    if (file.includes(' ')) {
        const oldPath = path.join(dir, file);
        const newFile = file.replace(/ /g, '_');
        const newPath = path.join(dir, newFile);
        console.log(`Renaming ${file} to ${newFile}...`);
        fs.renameSync(oldPath, newPath);
    }
}
