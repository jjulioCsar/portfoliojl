import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
    path.join(__dirname, 'src/assets/webp'),
    path.join(__dirname, 'src/assets/personal'),
    path.join(__dirname, 'arquivos/FOTOS TECH E TAMP'),
    path.join(__dirname, 'arquivos/FOTOS PHJOIAS'),
    path.join(__dirname, 'src/assets/projects'),
    path.join(__dirname, 'src/assets/certificates')
];

let totalSaved = 0;
let filesToProcess = 0;
let filesProcessed = 0;

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const stats = fs.statSync(filePath);
        const originalSize = stats.size;
        
        const outputFilePath = filePath.substring(0, filePath.lastIndexOf('.')) + '.webp';
        
        try {
            await sharp(filePath)
                .webp({ quality: 75 }) 
                .resize({ width: 1400, withoutEnlargement: true }) 
                .toFile(outputFilePath);

            const newStats = fs.statSync(outputFilePath);
            const savedBytes = originalSize - newStats.size;
            totalSaved += savedBytes;

            console.log(`Optimized: ${path.basename(filePath)} -> ${(newStats.size / 1024).toFixed(2)} KB (Saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB)`);
            
            if (filePath !== outputFilePath) {
                fs.unlinkSync(filePath);
            }
            
        } catch (err) {
            console.error(`Error optimizing ${filePath}:`, err);
        }
    }
    
    filesProcessed++;
    if (filesProcessed === filesToProcess) {
        console.log(`\n✅ Optimization complete! Saved a total of ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    }
}

let filesList = [];
directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            // skip webp processing
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                filesList.push(path.join(dir, file));
            }
        });
    }
});

filesToProcess = filesList.length;

if (filesToProcess === 0) {
    console.log("No images found to optimize.");
} else {
    filesList.forEach(file => optimizeImage(file));
}
