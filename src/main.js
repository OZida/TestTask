import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Starships from './components/starships.vue';
import SingleStarship from './components/singleStarship.vue';
import Favourites from './components/favourites.vue';

Vue.use(VueRouter);
// Vue.use(Vuetify);

var router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Starships
		},
		{
			path: '/starships/:id',
			name: 'singleStarship',
			component: SingleStarship,
		},
		{
			path: '/favourites',
			name: 'favourites',
			component: Favourites,
		},
	]
})

new Vue({
  el: '#app',
  router: router,
  // render: h => h(App)
})
