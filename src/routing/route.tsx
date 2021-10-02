import { hasAccess } from "../../src/services/security.service";
import { IUser } from "./../types/user";
import { IRouters } from "../types/routes";
import Home from "../containers/home";
import Services from "../containers/services";
import Partners from "../containers/partner";
import NewsEvents from "../containers/newsEvents";
import PartnersShop from "../containers/partnerShop";
import Contact from "../containers/contact";

export let routerArray: Array<IRouters> = [
    {
        id: 1,
        type: 'Route',
        name: 'Home',
        route: '/',
        icon: "",
        component: Home,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 2,
        type: 'Route',
        name: 'Services',
        route: '/services',
        icon: "",
        component: Services,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 3,
        type: 'Route',
        name: 'Partners',
        route: '/partners',
        icon: "",
        component: Partners,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 4,
        type: 'Route',
        name: 'News & Events',
        route: '/news_events',
        icon: "",
        component: NewsEvents,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 5,
        type: 'Route',
        name: 'Partner Shop',
        route: '/partners_shop',
        icon: "",
        component: PartnersShop,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 6,
        type: 'Route',
        name: 'Contact Us',
        route: '/contact',
        icon: "",
        component: Contact,
        options: {
            exact: true
        },
        permission: ['']
    },
];


// export const getRoutes = (user: IUser) => {
//     if (!user || (user && user.ID === '')) {
//         return []
//     }
//     // routes = routes.filter((item) => hasAccess(user, (item as any).permission[0]));
//     return routes;
// }