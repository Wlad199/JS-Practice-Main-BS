//import About from "@/views/About.vue";
//import Contacts from "@/views/Contacts.vue";
//import Home from "@/views/Home.vue";
//import NotFound from "@/views/NotFound.vue";
//import User from "@/views/users/User.vue";
//import Users from "@/views/users/Users.vue";

const Home = () => import('../views/Home.vue')

import { createRouter, createWebHistory } from 'vue-router'


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
			component: () => import('../views/About.vue')
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: () => import('../views/Contacts.vue')
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('../views/users/Users.vue')
		}, {
			path: '/users/:id',
			name: 'user',
			component: () => import('../views/users/User.vue')
		}, {
			path: '/about-us',
			redirect: '/about'
		}, {
			path: '/:catchAll(.*)',
			name: 'notFound',
			component: () => import('../views/NotFound.vue')
		}
	]
})

export default router