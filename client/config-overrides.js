const path = require('path');
module.exports = function override(config, env) {
    //add the plugin 
    // config.output.path = path.resolve(`../${__dirname}`, 'dist')
    return config;
}