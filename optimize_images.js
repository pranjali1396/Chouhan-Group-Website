
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const files = [
    'new images/CAM-4.jpg',
    'new images/Parkview complex card.jpg',
    'new images/ELR_Balod 103.jpg',
    'new images/Parkview Hero.png',
    'new images/Singapore Phase 4.png',
    'new images/chouhan2.jpg',
    'new images/maruti-suzuki-nexa.jpg'
];

async function optimize() {
    for (const file of files) {
        const input = path.join('public', file);
        const ext = path.extname(input);
        const output = input.replace(ext, '_optimized.webp');

        if (fs.existsSync(input)) {
            console.log(`Optimizing ${input}...`);
            try {
                await sharp(input)
                    .resize({ width: 2560, withoutEnlargement: true }) // Limit width for 2K
                    .webp({ quality: 75 })
                    .toFile(output);
                const stats_in = fs.statSync(input);
                const stats_out = fs.statSync(output);
                console.log(`Success: ${output} (${(stats_out.size / 1024 / 1024).toFixed(2)} MB vs ${(stats_in.size / 1024 / 1024).toFixed(2)} MB)`);
            } catch (err) {
                console.error(`Error optimizing ${file}:`, err);
            }
        } else {
            console.log(`File not found: ${input}`);
        }
    }
}

optimize();
