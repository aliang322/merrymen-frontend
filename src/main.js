import { createApp } from 'vue';
import App from './App.vue';
import vue3GoogleLogin from 'vue3-google-login';
import Login from './components/Login.vue';

import './style.css';

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
});

app.component('Login', Login);

app.mount('#app');