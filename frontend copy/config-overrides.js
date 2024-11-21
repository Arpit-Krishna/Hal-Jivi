const webpack = require('webpack'); // This should only appear once

module.exports = function override(config) {
    config.plugins.push(new webpack.ProvidePlugin({
        process: 'process/browser',
    }));
    return config;
};
