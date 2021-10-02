import { hasAccess } from "../../src/services/security.service";
import { IUser } from "./../types/user";
import { IRouters } from "../types/routes";

let routes: Array<IRouters> = [
    // {
    //     id: 1,
    //     type: 'Route',
    //     route: '/',
    //     icon: "",
    //     component: ,
    //     options: {
    //         exact: true
    //     },
    //     permission: ['']
    // }
];


export const getRoutes = (user: IUser) => {
    if (!user || (user && user.ID === '')) {
        return []
    }
    routes = routes.filter((item) => hasAccess(user, (item as any).permission[0]));
    return routes
}