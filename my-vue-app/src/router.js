import { createRouter, createWebHistory, } from 'vue-router';

 import AppHome from './views/AppHome.vue';
 import AppAbout from './views/AppAbout.vue';
 import AppContacts from './views/AppContacts.vue';
 import AppProjects from './views/AppProjects.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },

        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },

        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
})

export {router};