import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserMd, faMoneyBill, faHandRock, faHistory, faBriefcase, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from './store/store.js';
import LoadingSpinner from './components/LoadingSpinner.vue';

library.add(faUserMd);
library.add(faMoneyBill);
library.add(faHandRock);
library.add(faHistory);
library.add(faBriefcase);
library.add(faMapMarkerAlt);

const app = createApp(App);

app.use(router);

app.use(store);

app.component('loading-spinner', LoadingSpinner);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app')
