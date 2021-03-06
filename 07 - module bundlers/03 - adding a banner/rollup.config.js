import pkg from './package.json';

let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

export default {
	input: 'index.js',
	output: {
		file: 'handyman.js',
		format: 'iife',
		name: 'handyman',
		banner: banner
	}
};