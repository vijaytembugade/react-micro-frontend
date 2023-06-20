// You can write your own logic here to determine the actual url
// You can put your production url there
window.microapp1Url =
  process.env.environment === 'production'
    ? 'http://127.0.0.1:5500/microapp1/build/'
    : 'http://localhost:3001';

window.microapp2Url =
    process.env.environment === 'production'
      ? 'http://127.0.0.1:5500/microapp2/build/'
      : 'http://localhost:3002';
  
import('./bootstrap');
