const fs = require('fs');
const path = require('path');

function removeDarkModeClasses(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const original = content;

        // Remove dark: class variants with improved regex
        content = content.replace(/\s+dark:[a-zA-Z0-9\-:\/\[\]]+/g, '');

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Updated: ${path.basename(filePath)}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`✗ Error processing ${filePath}:`, error.message);
        return false;
    }
}

// Files to process
const files = [
    'app/[locale]/(admin)/admin/page.tsx',
    'app/[locale]/(admin)/login/page.tsx',
    'app/[locale]/(public)/about/page.tsx',
    'app/[locale]/(public)/contact/page.tsx',
    'app/[locale]/(public)/projects/[id]/page.tsx',
].map(f => path.join('c:/Users/abdul/OneDrive/Desktop/portfolio-website', f));

let count = 0;
files.forEach(file => {
    if (fs.existsSync(file)) {
        if (removeDarkModeClasses(file)) count++;
    } else {
        console.log(`⚠ File not found: ${file}`);
    }
});

console.log(`\n✓ Removed dark mode from ${count} files!`);
