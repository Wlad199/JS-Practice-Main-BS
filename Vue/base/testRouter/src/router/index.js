import { createRouter, createWebHistory } from 'vue-router'

import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Home from "@/views/Home.vue";
import Users from '@/views/users/Users.vue';
import User from '@/views/users/User.vue';


const routes = [
	{
		name: 'Home',
		path: '/',
		component: () => import('../views/Home.vue')
	}, {
		name: 'About',
		path: '/about',
		component: () => import('../views/About.vue')
	}, {
		name: 'Contacts',
		path: '/contacts',
		component: () => import('../views/Contacts.vue')
	}, {
		name: 'Users',
		path: '/users',
		component: () => import('../views/users/Users.vue')
	}, {
		name: 'User',
		path: '/users/:id',
		component: () => import('../views/users/User.vue')
	}, {
		path: '/about-us',
		redirect: '/about'
	}, {
		name: 'NotFound',
		path: '/:catchAll(.*)',
		component: () => import('../views/NotFound.vue')
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router