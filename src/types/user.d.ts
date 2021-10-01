import { IAuthUserGroup } from './auth';

export interface IUser {
    ID: string;
    UserName: string;
    StartDate: string;
    EndDate: string;
    IsActiveUser: number;
    groups: Array<IAuthUserGroup>
}
