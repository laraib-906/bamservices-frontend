import { pdsDownloadsPassword } from "../configs/secret.config";
import { IUser } from "./../types/user";

export function hasAccess(user: IUser, requiredPermission: string) {
    // TODO: create app gaurd
}

export function getPdfSecretPassword() {
    return pdsDownloadsPassword;
}