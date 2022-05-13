const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require('path');

module.exports = function override(config, env) {
	config = rewireReactHotLoader(config, env);
	config.resolve = {
		...config.resolve,
		alias: {
		  ...config.alias,
		  '@containers': path.resolve(__dirname, 'src/containers'),
		  '@components': path.resolve(__dirname, 'src/components'),
		  '@hooks': path.resolve(__dirname, 'src/hooks'),
		  '@types': path.resolve(__dirname, 'src/types'),
		  '@shared': path.resolve(__dirname, 'src/shared'),
		  '@api': path.resolve(__dirname, 'src/api'),
		  '@src': path.resolve(__dirname, 'src'),
		  '@services': path.resolve(__dirname, 'src/src/services'),
		},
	  };
	
	return config;
};
