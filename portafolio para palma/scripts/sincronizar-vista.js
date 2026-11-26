const fs = require('fs');
const path = require('path');

const raiz = path.resolve(__dirname, '..');
const fuente = path.join(raiz, 'portfolio-data.json');
const plantilla = path.join(raiz, 'vista-web', 'plantilla.html');
const destino = path.join(raiz, 'vista-web', 'index.html');
const copiaExpo = path.join(raiz, 'portfolio-movil', 'src', 'portfolio-data.json');

const datos = JSON.parse(fs.readFileSync(fuente, 'utf8'));
const html = fs.readFileSync(plantilla, 'utf8');
const seguro = JSON.stringify(datos).replace(/</g, '\\u003c');

fs.writeFileSync(destino, html.replace('__DATA__', seguro), 'utf8');
fs.copyFileSync(fuente, copiaExpo);
console.log('Vista web y datos de Expo actualizados.');
