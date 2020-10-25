const plugins = require( './plugins' );
const loaders = require( './loaders' );

const isDev = 'development' === process.env.NODE_ENV;

module.exports = {
    entry: {
        'entry-client': './src/entry-client.js',
        'entry-server': './src/entry-server.js'
    },
    mode: process.env.NODE_ENV || 'development',
    stats: { warnings: false },
    devtool: isDev ? 'inline-source-map' : false,
    module: {
		rules: loaders
	},
    resolve: {
        extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.runtime.common.js'
		}
    },
    plugins,
}