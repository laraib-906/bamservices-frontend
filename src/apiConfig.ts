import config from '../config';
export const AppName = 'BamServices';

const BASEURL = config.BASE_URL;

export const APIURLs = {
	authAPI: `${BASEURL}/session`,

};

export default APIURLs;