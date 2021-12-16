import {createApp} from 'vue';
import App from './App.vue';
import Router from './router';
import ElementPlus from 'element-plus';


const app = createApp(App);

app.use(Router);// router

app.use(ElementPlus);

app.mount('#app');
