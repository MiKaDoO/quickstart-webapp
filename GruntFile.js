module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		watch: {
			src : {
				files: ['src/*.*','**/*.*'],
				tasks: [],
				options: {
					livereload: true,
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'src',
					livereload: true,
					open: true
				}
			}
		}
	});
	
	grunt.registerTask('dev', ['connect','watch']);
};