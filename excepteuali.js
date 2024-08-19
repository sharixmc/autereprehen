const windowsFileUrl = 'file:///C:/path/to/file.txt';
const windowsFilePath = fileURLToPath(windowsFileUrl);

console.log(windowsFilePath);
// Output: 'C:\path\to\file.txt'
