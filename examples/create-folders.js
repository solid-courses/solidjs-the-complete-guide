import { mkdir } from 'fs/promises';

const createFolders = async () => {
  for (let i = 1; i <= 40; i++) {
    const folderName = `ch${String(i).padStart(2, '0')}`;
    try {
      await mkdir(folderName);
      console.log(`Created folder: ${folderName}`);
    } catch (err) {
      if (err.code === 'EEXIST') {
        console.log(`Folder already exists: ${folderName}`);
      } else {
        console.error(`Error creating folder ${folderName}:`, err);
      }
    }
  }
};

createFolders();
