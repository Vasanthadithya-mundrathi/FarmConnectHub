import https from 'https';
import fs from 'fs';
import path from 'path';

const imageUrls = {
  hero: [
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2', // Farm field
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854', // Tractor in field
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449', // Modern farming
  ],
  crops: [
    'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0', // Rice
    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b', // Maize
    'https://images.unsplash.com/photo-1599690925058-90e1a0b56154', // Cotton
    'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0', // Wheat
  ],
  tech: [
    'https://images.unsplash.com/photo-1586016413664-864c0dd76f53', // Drone
    'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801', // Smart tech
    'https://images.unsplash.com/photo-1551650992-ee4fd47df41f', // Precision farming
  ],
  tools: [
    'https://images.unsplash.com/photo-1580674684081-7617fbf3d745', // Tools
    'https://images.unsplash.com/photo-1617891861564-6b0b40967604', // Tractor
    'https://images.unsplash.com/photo-1575913657c625-3d9b3c5c4c4f', // Harvester
  ],
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(`${url}?w=1200&q=80`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filename);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file if download failed
      reject(err);
    });
  });
};

const downloadAllImages = async () => {
  const downloads = [];

  // Download hero images
  imageUrls.hero.forEach((url, index) => {
    downloads.push(
      downloadImage(url, `public/images/hero${index + 1}.jpg`)
    );
  });

  // Download crop images
  imageUrls.crops.forEach((url, index) => {
    downloads.push(
      downloadImage(url, `public/images/crops/crop${index + 1}.jpg`)
    );
  });

  // Download tech images
  imageUrls.tech.forEach((url, index) => {
    downloads.push(
      downloadImage(url, `public/images/tech/tech${index + 1}.jpg`)
    );
  });

  // Download tools images
  imageUrls.tools.forEach((url, index) => {
    downloads.push(
      downloadImage(url, `public/images/tools/tool${index + 1}.jpg`)
    );
  });

  try {
    await Promise.all(downloads);
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages();
