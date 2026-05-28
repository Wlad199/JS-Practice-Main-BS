import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Home from "@/views/Home.vue";
import Users from "@/views/users/Users.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: Contacts
		},
		{
			path: '/users',
			name: 'users',
			component: Users
		},
		{
			path: '/:pathMath(.*)*',
			name: 'not-found',
			component: () => import('../views/NotFound.vue')
		},
	]
})

export default router