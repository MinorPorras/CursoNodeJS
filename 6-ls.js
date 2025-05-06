const fs = require('node:fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    fs.stat(file, (err, stats) => {
      if (err) {
        console.error('Error getting file stats:', err);
        return;
      }

      if (stats.isFile()) {
        console.log(`${file} is a file`);
      } else if (stats.isDirectory()) {
        console.log(`${file} is a directory`);
      }
    });
  });
});

