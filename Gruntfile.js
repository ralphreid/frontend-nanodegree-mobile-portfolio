'use strict'

var ngrok = require('ngrok');

module.exports = function(ngrok) {
    // Load grunt tasks
    require('load-grunt-tasks')(grunt);
    
    // Grunt configuration
    grunt.initConfig({
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                threshold: 40
            },
            local: {
                options: {strategy: "desktop"}
            },
            mobile: {
                options: { strategy: "mobile"}
            }
        }
    });
};
