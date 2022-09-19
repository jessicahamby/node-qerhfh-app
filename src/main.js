const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

// MOB_DEBUG=true npm run test - Enables mobile debugging

function debug(...argv) {
  fetch('/debug?argv=' + JSON.stringify(argv));
}
