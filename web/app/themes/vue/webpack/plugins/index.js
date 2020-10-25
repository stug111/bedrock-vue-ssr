const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

plugins = [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
        filename: 'style.css'
    })
];

if (process.env.NODE_ENV === 'development') {
    plugins.push( require( './browser-sync' ) );
}

module.exports = plugins;
