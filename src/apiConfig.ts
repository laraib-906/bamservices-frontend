import config from './config';
export const AppName = 'BamServices';

const BASEURL = config.BASE_URL;

export const APIURLs = {
	sign: `${BASEURL}/user`,
	login: `${BASEURL}/auth/login`,
	me: `${BASEURL}/auth/me`,
	file: `${BASEURL}/file`
};

export default APIURLs;