import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
	  		path: '/',
	  		name: 'home',
	  		component: Home
		},
		{
	  		path: '/about',
	  		name: 'about',
	  		component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
	  		path: '/support',
	  		name: 'support',
	  		component: () => import(/* webpackChunkName: "support" */ './views/Support.vue')
		},
		{
	  		path: '/releases',
	  		name: 'releases',
	  		component: () => import(/* webpackChunkName: "releases" */ './views/Releases.vue')
		},
		{
	  		path: '/releases/singles/:release',
	  		name: 'single-release',
	  		component: () => import(/* webpackChunkName: "single-release" */ './views/ReleaseDetails.vue')
		},
		{
	  		path: '/updates',
	  		name: 'updates',
	  		component: () => import(/* webpackChunkName: "updates" */ './views/Updates.vue')
		},
		{
	  		path: '/updates/:updateSlug',
	  		name: 'update-details',
	  		component: () => import(/* webpackChunkName: "update-details" */ './views/UpdateDetails.vue')
		}
  	]
})
