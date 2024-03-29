import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import './assets/style.css';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(Toast)
app.mount("#app")

