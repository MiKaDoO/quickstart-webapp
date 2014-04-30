module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.initConfig({
		bowerInstall: {
			target: {
				src: ['src/index.html']
			}
		},
		watch: {
			src : {
				files: ['src/*.*','**/*.*'],
				tasks: ['bowerInstall'],
				options: {
					livereload: true,
				}
			}
		},
		connect: {
			server: {
				options: {
					hostname: '127.0.0.1',
					port: 8000,
					base: 'src',
					livereload: true,
					open: true
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});
	
	grunt.registerTask('server', ['connect','watch']);
	grunt.registerTask('test', ['karma']);
};