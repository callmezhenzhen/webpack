import VueRouter from 'vue-router';

const routes = [
    {
        name: 'pageone',
        path: '/pageone',
        component: (resolve) => require(['@/pages/pageone'], resolve)
    },
    {
        name: 'pagetwo',
        path: '/pagetwo',
        component: (resolve) => require(['@/pages/pagetwo'], resolve)
    }
]
export const router = new VueRouter({ routes });