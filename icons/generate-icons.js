#!/usr/bin/env node

/**
 * Simple icon generator for PWA
 * Creates basic placeholder icons as PNG files
 */

const fs = require('fs');
const path = require('path');

// PNG header for a simple colored square
function createPNG(size, color) {
    // This is a simplified approach - creates a very basic PNG
    // For production, you should use proper icons

    // Create a simple SVG and note that proper conversion needed
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <rect width="${size}" height="${size}" fill="#4a90e2"/>
        <text x="50%" y="50%" font-family="Arial" font-size="${size/4}" fill="white" text-anchor="middle" dy=".3em">🚂</text>
    </svg>`;

    return svg;
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = __dirname;

console.log('Icon Generator for Special Train PWA');
console.log('=====================================\n');
console.log('NOTE: This script creates SVG placeholders.');
console.log('For production, please convert the main icon.svg to PNG at different sizes.\n');
console.log('You can use:');
console.log('  - Open icons/generate-icons.html in a browser');
console.log('  - Use online tools like https://realfavicongenerator.net/');
console.log('  - Use ImageMagick: convert icon.svg -resize 192x192 icon-192x192.png\n');

sizes.forEach(size => {
    const filename = `icon-${size}x${size}.svg`;
    const filepath = path.join(iconsDir, filename);
    const svg = createPNG(size);

    fs.writeFileSync(filepath, svg);
    console.log(`✓ Created ${filename}`);
});

console.log('\n✓ Created ' + sizes.length + ' placeholder icons (SVG format)');
console.log('\nNext steps:');
console.log('1. Open icons/generate-icons.html in your browser');
console.log('2. Click "Generate Icons" to create PNG versions');
console.log('3. Or use a tool like ImageMagick or online converter');
