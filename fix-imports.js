const fs = require('fs');
const path = require('path');

function fixImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        fixImports(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Replace @/carKey/ with @/
        content = content.replace(/@\/carKey\//g, '@/');
        
        // Fix dashboard component paths (they're in root dashboard/, not components/dashboard/)
        content = content.replace(/@\/components\/dashboard\//g, '@/dashboard/');
        
        // Only write if changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✓ Fixed: ${filePath}`);
        }
      } catch (err) {
        console.error(`✗ Error processing ${filePath}:`, err.message);
      }
    }
  });
}

console.log('Starting import path fix...\n');
fixImports(path.join(__dirname));
console.log('\n✅ Import path fix completed!');
