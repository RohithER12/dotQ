const Jimp = require('jimp');

async function main() {
    console.log('Reading image...');
    try {
        const image = await Jimp.read('public/assets/dotq-logo.png');

        const threshold = 15; // Strict tolerance for "black" to avoid eating into dark blue shadows

        console.log('Processing pixels...');
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
            const r = image.bitmap.data[idx + 0];
            const g = image.bitmap.data[idx + 1];
            const b = image.bitmap.data[idx + 2];

            // If very dark (background)
            if (r <= threshold && g <= threshold && b <= threshold) {
                image.bitmap.data[idx + 3] = 0; // Make transparent
            }
        });

        console.log('Saving...');
        await image.writeAsync('public/assets/dotq-logo-transparent.png');
        console.log('Success: public/assets/dotq-logo-transparent.png created');
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
