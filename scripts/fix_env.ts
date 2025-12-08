import * as fs from 'fs';
import * as path from 'path';

const envPath = path.resolve(__dirname, "../.env");

if (fs.existsSync(envPath)) {
    const buffer = fs.readFileSync(envPath);
    // Check for UTF-16 LE BOM (FF FE)
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
        console.log("Detected UTF-16 LE BOM. Converting to UTF-8...");
        const content = buffer.toString('utf16le');
        fs.writeFileSync(envPath, content, 'utf8');
        console.log("Conversion complete.");
    } else {
        console.log("File is not UTF-16 LE BOM. Content start:", buffer.slice(0, 4).toString('hex'));
        // It might be UTF-16 without BOM if copied weirdly, but usually it has BOM.
        // Let's assume if it has null bytes it is wide char.
        if (buffer.indexOf(0x00) !== -1) {
            console.log("Detected null bytes, forcing UTF-16 LE read...");
            const content = buffer.toString('utf16le');
            fs.writeFileSync(envPath, content, 'utf8');
            console.log("Conversion complete.");
        } else {
            console.log("File seems to be UTF-8 already.");
        }
    }
} else {
    console.log(".env not found");
}
