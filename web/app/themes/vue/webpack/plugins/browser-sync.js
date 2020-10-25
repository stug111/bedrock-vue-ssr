const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );

module.exports = new BrowserSyncPlugin({
    files: ['./src/**/*.vue', "./src/**/*.css"],
    reloadDelay: 0,
    notify: {
        styles: {
            top: 'auto',
            bottom: '1rem',
            right: '1rem',
            left: 'auto',
            width: '200px',
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
            border: 'none',
            fontSize: '0.8rem',
            color: 'white',
            background: '#3A474E'
        }
    }
})
