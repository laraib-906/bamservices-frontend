import config from './config';
export const AppName = 'BamServices';

const BASEURL = config.BASE_URL;

export const APIURLs = {
	signAPI: `${BASEURL}/user`,
	loginAPI: `${BASEURL}/auth/login`,
	meAPI: `${BASEURL}/auth/me`,
};

export default APIURLs;