import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageUrls } from '../src/data/imageUrls.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

async function downloadAllImages() {
  const categories = Object.keys(imageUrls);
  
  for (const category of categories) {
    const items = imageUrls[category];
    for (const [key, url] of Object.entries(items)) {
      const filepath = path.join(__dirname, '..', 'public', 'images', category, `${key}.jpg`);
      try {
        console.log(`Downloading ${category}/${key}.jpg...`);
        await downloadImage(url, filepath);
        console.log(`Successfully downloaded ${category}/${key}.jpg`);
      } catch (error) {
        console.error(`Error downloading ${category}/${key}.jpg:`, error);
      }
    }
  }
}

downloadAllImages();
