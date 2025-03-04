const fs = require('fs').promises;
const path = require('path');

async function processFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    let updatedContent = fileContent.replace(/\*/g, '<em>');
    updatedContent = updatedContent.replace(/\*/g, '</em>');

    await fs.writeFile(filePath, updatedContent, 'utf-8');
    console.log(`Successfully updated ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  const filePath = process.argv[2]; // Get file path from command line arguments
  if (!filePath) {
    console.error('Please provide a file path as an argument.');
    return;
  }
  await processFile(filePath);
}

main();