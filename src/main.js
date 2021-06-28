import Vue from 'vue';
import App from './App.vue';

import Nav from "./components/Nav.vue";

import Pagination from "./components/Pagination.vue";

import Characters from "./components/Characters.vue";
import Character from "./components/Character.vue";

import Locations from "./components/Locations.vue";
import Location from "./components/Location.vue";


Vue.component("Nav", Nav);

Vue.component("Pagination", Pagination);

Vue.component("Characters", Characters);
Vue.component("Character", Character);

Vue.component("Locations", Locations);
Vue.component("Location", Location);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
