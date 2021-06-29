import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Pagination from "./components/Pagination.vue";

import Characters from "./components/Characters.vue";
import Character from "./components/Character.vue";

import Locations from "./components/Locations.vue";
import Location from "./components/Location.vue";

import Episodes from "./components/Episodes.vue";
import Episode from "./components/Episode.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/character" },
    { path: "/character", component: Characters },
    { path: "/location", component: Locations },
    { path: "/episode", component: Episodes },
  ],
});

Vue.component("Pagination", Pagination);

Vue.component("Characters", Characters);
Vue.component("Character", Character);

Vue.component("Locations", Locations);
Vue.component("Location", Location);

Vue.component("Episodes", Episodes);
Vue.component("Episode", Episode);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


