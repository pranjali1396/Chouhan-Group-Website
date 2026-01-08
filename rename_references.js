
import fs from 'fs';
import path from 'path';

const rootDir = '.';
const search = /\/new images\//g;
const searchUnquoted = /url\("\/new images\//g; // Special case for url()
const replace = '/new_images/';

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
                walk(fullPath);
            }
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.match(search)) {
                console.log(`Updating ${fullPath}...`);
                const newContent = content.replace(search, replace);
                fs.writeFileSync(fullPath, newContent, 'utf8');
            }
        }
    }
}

walk(rootDir);
console.log('Done replacement.');
