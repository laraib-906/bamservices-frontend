

export interface IRouterOptions {
    exact: boolean
}

export interface IRouters {
    id?: number;
    type?: string;
    name?: string;
    route?: string;
    icon?: string;
    hidden: boolean;
    component?: any;
    options?: IRouterOptions;
    permission?: Array<string>;
}
