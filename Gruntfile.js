module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* COMBINE JS FILES
		=========================================*/
		concat: {
			dist: {
				src: [
					'js/src/*.js'
				],
				dest: 'js/build/production.js'
			}
		},

		/* MINIFY JS FILES
		=========================================*/
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},

		/* CONVERT SASS TO CSS
		=========================================*/
		sass: {
			dist: {
				files: {
					'css/build/stylesheet.css': 'css/src/stylesheet.scss'
				}
			}
		},

		/* ADD CSS VENDOR PREFIXES
		=========================================*/
		autoprefixer: {
            dist: {
                src: 'css/build/stylesheet.css'
            }
        },

		/* MINIFY CSS
		=========================================*/
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/build',
					src: ['*.css', '!*.min.css'],
					dest: 'css/build',
					ext: '.min.css'
				}]
			}
		},

		/* WATCH FILES FOR CHANGES, THEN RUN TASKS
		=========================================*/
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false
				},
			},
			css: {
				files: ['css/src/*.scss'],
				tasks: ['sass','autoprefixer','cssmin'],
				options: {
				  spawn: false
				}
			},
			js: {
				files: ['js/src/*.js'],
				tasks: ['concat','uglify'],
				options: {
				  spawn: false
				}
			},
			html:{
				files: ['./**/*.html'],
				tasks: [],
				options: {
				  spawn: false,
				  livereload: true
				}
			}
		},

		/* SYNCRONIZE BROWSERS & LIVE INJECT CSS AND HTML
		=========================================*/
		browserSync: {
		    bsFiles: {
		        src : 'css/build/*.css'
		    },
		    options: {
				watchTask: true,
		        server: './',
				plugins: [
                    {
                        module: "bs-html-injector",
                        options: {
                            files: "*.html"
                        }
                    }
                ]
		    }
		}

	});

	/* TELL GRUNT WHICH PLUGINS WE NEED
	=========================================*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['concat','uglify','browserSync','watch','sass','autoprefixer','cssmin']);

};
