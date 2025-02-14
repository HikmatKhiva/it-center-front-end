import archiver from "archiver";
import fs from "fs";
import path from "path";

async function zipFolder(folderPath, zipName) {
  const tempZipPath = path.join(__dirname, "temp", zipName);
  const output = fs.createWriteStream(tempZipPath);

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });

  archive.pipe(output);
  const files = await fs.promises.readdir(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = await fs.promises.stat(filePath);

    if (stats.isDirectory()) {
      // Handle subdirectories recursively
      const subFiles = await fs.promises.readdir(filePath);

      for (const subFile of subFiles) {
        const subFilePath = path.join(filePath, subFile);
        archive.file(subFilePath, {
          name: path.relative(folderPath, subFilePath),
        });
      }
    } else {
      archive.file(filePath, { name: file });
    }
  }

  await archive.finalize();
  console.log("Folder zipped successfully!");
}
const __dirname = path.resolve();
// zipFolder(path.join(__dirname, "public", "100-100"), "100-100.zip");
