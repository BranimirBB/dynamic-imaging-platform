import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '../src/assets/icons/PWA_logo.png');
const outputDir = path.join(__dirname, '../public');

async function resizeIcons() {
    try {
        // Create 192x192 icon
        await sharp(inputPath)
            .resize(192, 192, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toFile(path.join(outputDir, 'pwa-192x192.png'));

        console.log('✅ Created pwa-192x192.png');

        // Create 512x512 icon
        await sharp(inputPath)
            .resize(512, 512, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toFile(path.join(outputDir, 'pwa-512x512.png'));

        console.log('✅ Created pwa-512x512.png');
        console.log('🎉 PWA icons generated successfully!');
    } catch (error) {
        console.error('❌ Error generating icons:', error);
        process.exit(1);
    }
}

resizeIcons();
