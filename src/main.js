import Vue from 'vue';
import store from './store/index';
import App from './App.vue';
import { VueMasonryPlugin } from 'vue-masonry';
import infiniteScroll from 'vue-infinite-scroll';

Vue.config.productionTip = false;

Vue.prototype.$eventHub = new Vue();

Vue.use(VueMasonryPlugin);
Vue.use(infiniteScroll);

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
