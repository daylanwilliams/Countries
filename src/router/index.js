import { createRouter, createWebHistory } from 'vue-router'
import countryapi from '../views/countryapi.vue'

const routes = [
	{
		path: '/',
		name: 'countryapi',
		component: countryapi
	},
	{
		path: '/myCountries',
		name: 'myCountries',
		component: () => 
		import("../views/myCountries.vue")
	}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
