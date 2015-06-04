module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            styles: {
                files: ['scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            scripts: {
                files: ['js/**/*.js', '!js/core.js'],
                tasks: ['concat']
            }
        },
        // Style related tasks
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/styles.css': 'scss/styles.scss',
                }
            }
        },
        autoprefixer: {
            options: {
                map: true
            },
            dev: {
                files: [{
                    src: 'css/styles.css',
                    dest: 'css/styles.css'
                }]
            }
        },
        cssmin: {
            dev: {
                files: [{
                    src: ['css/styles.css'],
                    dest: 'css/styles.css'
                }]
            }
        },
        // Script related tasks
        concat: {
            options: {
                separator: '\n\n\n'
            },
            dev: {
                src: ['js/**/*.js', '!js/core.js'],
                dest: 'js/core.js'
            }
        },
        uglify: {
            options: {
                banner: '/* core.js\n *<%= grunt.template.today("dd-mm-yyyy") %> */\n\n'
            },
            dev: {
                files: {
                    'js/core.js': ['<%= concat.dev.dest %>']
                }
            }
        },
    });

    // Styles
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Scripts
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Build
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Specific tasks
    grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify']);
    grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);

    // Default task
    grunt.registerTask('default', 'build');
};
