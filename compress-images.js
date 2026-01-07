import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToCompress = [
    {
        input: 'public/new images/ai_nexa_showroom.png',
        output: 'public/new images/ai_nexa_showroom_optimized.webp'
    },
    {
        input: 'public/new images/pro.png',
        output: 'public/new images/pro_optimized.webp'
    },
    {
        input: 'public/new images/ELR_Balod 104.jpg',
        output: 'public/new images/ELR_Balod_104_optimized.webp'
    },
    {
        input: 'public/new images/IMG_0028.jpg',
        output: 'public/new images/IMG_0028_optimized.webp'
    },
    {
        input: 'public/new images/herosingapore.JPG',
        output: 'public/new images/herosingapore_optimized.webp'
    },
    {
        input: 'public/new images/Housing Chouhan (3).png',
        output: 'public/new images/Housing_Chouhan_3_optimized.webp'
    }
];

async function compressImages() {
    console.log('🖼️  Starting image compression...\n');

    for (const img of imagesToCompress) {
        try {
            // Check if input file exists
            if (!fs.existsSync(img.input)) {
                console.log(`⚠️  Skipping ${img.input} - file not found`);
                continue;
            }

            const inputStats = fs.statSync(img.input);
            const inputSizeMB = (inputStats.size / (1024 * 1024)).toFixed(2);

            console.log(`📦 Compressing: ${path.basename(img.input)} (${inputSizeMB} MB)`);

            // Compress to WebP with quality 85
            await sharp(img.input)
                .webp({ quality: 85, effort: 6 })
                .toFile(img.output);

            const outputStats = fs.statSync(img.output);
            const outputSizeMB = (outputStats.size / (1024 * 1024)).toFixed(2);
            const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

            console.log(`✅ Created: ${path.basename(img.output)} (${outputSizeMB} MB) - ${reduction}% smaller\n`);

        } catch (error) {
            console.error(`❌ Error compressing ${img.input}:`, error.message);
        }
    }

    console.log('🎉 Compression complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Review the optimized images in public/new images/');
    console.log('2. If satisfied, rename them to replace the originals');
    console.log('3. Update Hero.tsx to use the optimized versions');
}

compressImages().catch(console.error);
