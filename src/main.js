import Vue from 'vue';
import App from './App.vue';
import Nav from "./components/Nav.vue";
import Characters from "./components/Characters.vue";
import Character from "./components/Character.vue";

Vue.component("Nav", Nav);
Vue.component("Characters", Characters);
Vue.component("Character", Character);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
