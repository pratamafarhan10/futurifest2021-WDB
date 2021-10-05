import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserMd, faMoneyBill, faHandRock, faHistory, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from './store/store.js';

library.add(faUserMd);
library.add(faMoneyBill);
library.add(faHandRock);
library.add(faHistory);
library.add(faBriefcase);

const app = createApp(App);

app.use(router);

app.use(store);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app')
