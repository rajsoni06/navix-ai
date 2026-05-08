const fs = require('fs');
const p = 'dist/client/assets/index-lgZHKM31.js';
let s = fs.readFileSync(p, 'utf8');
const ns = s.replace(/hydrateRoot\(document,/g, "hydrateRoot(document.getElementById('root'),");
if (s === ns) {
  console.log('no change');
} else {
  fs.writeFileSync(p, ns);
  console.log('patched');
}
