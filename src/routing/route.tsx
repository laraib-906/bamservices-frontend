import { IRouters } from "../types/routes";
import Home from "../containers/home";
import Services from "../containers/services";
import Partners from "../containers/partner";
import PartnersShop from "../containers/partnerShop";
import Contact from "../containers/contact";
import EventDetails from '../containers/newsEvents/eventsDetails';
import SecretPdf from "../containers/secretPdf";
import Login from "../components/login";
import Signup from "../components/signup";

export let routerArray: Array<IRouters> = [
    {
        id: 1,
        type: 'Route',
        name: 'Login',
        route: '/login',
        icon: "",
        hidden: true,
        component: Login,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 2,
        type: 'Route',
        name: 'Signup',
        route: '/signup',
        icon: "",
        hidden: true,
        component: Signup,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 3,
        type: 'Route',
        name: 'Home',
        route: '/',
        icon: "",
        hidden: false,
        component: Home,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 4,
        type: 'Route',
        name: 'Services',
        route: '/services',
        icon: "",
        hidden: false,
        component: Services,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 5,
        type: 'Route',
        name: 'Partners',
        route: '/partners',
        icon: "",
        hidden: false,
        component: Partners,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 7,
        type: 'Route',
        name: 'News & Events',
        route: '/news_events/:id',
        icon: "",
        hidden: true,
        component: EventDetails,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 8,
        type: 'Route',
        name: 'Partner Shop',
        route: '/partners_shop',
        icon: "",
        hidden: false,
        component: PartnersShop,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 9,
        type: 'Route',
        name: 'Contact Us',
        route: '/contact',
        icon: "",
        hidden: false,
        component: Contact,
        options: {
            exact: true
        },
        permission: ['']
    },
    {
        id: 7,
        type: 'Route',
        name: 'Confidential Data',
        route: '/secrets',
        icon : "",
        hidden: true,
        component: SecretPdf,
        options:{
            exact:true
        }
        }
];


// export const getRoutes = (user: IUser) => {
//     if (!user || (user && user.ID === '')) {
//         return []
//     }
//     // routes = routes.filter((item) => hasAccess(user, (item as any).permission[0]));
//     return routes;
// }