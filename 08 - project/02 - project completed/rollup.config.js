import pkg from './package.json';

let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

let formats = ['iife', 'es', 'cjs'];

export default formats.map(function (format) {
	return {
		input: 'index.js',
		output: {
			file: `spork${format === 'iife' ? '' : `.${format}`}.js`,
			format: 'iife',
			name: 'spork',
			banner: banner
		}
	};
});