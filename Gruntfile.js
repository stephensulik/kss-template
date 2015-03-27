module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        kss: {
            options: {
                template: 'template/'
            },
            dist: {
                files: {
                  'output/': ['styles/']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-kss');

    grunt.registerTask('styleguide', ['kss']);

};