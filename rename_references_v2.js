
import fs from 'fs';
import path from 'path';

const rootDir = '.';
// This regex looks for strings like "/new_images/some file.jpg" and captures the path
const pathRegex = /"\/new_images\/[^"]+"/g;
const pathRegexSingle = /'\/new_images\/[^']+'/g;

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
            let changed = false;

            content = content.replace(pathRegex, (match) => {
                const replaced = match.replace(/ /g, '_');
                if (replaced !== match) changed = true;
                return replaced;
            });

            content = content.replace(pathRegexSingle, (match) => {
                const replaced = match.replace(/ /g, '_');
                if (replaced !== match) changed = true;
                return replaced;
            });

            if (changed) {
                console.log(`Updating spaces in paths for ${fullPath}...`);
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

walk(rootDir);
console.log('Done replacement.');
