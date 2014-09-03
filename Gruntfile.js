module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// see https://github.com/yoniholmes/grunt-text-replace
		
		concat: {
			options: {
				separator: '\n\n\n',
			},
			'boilerplate': {
				src: [
				'src/js/boilerplate/*.js',
				'src/js/boilerplate/controllers/*.js',
				'src/js/boilerplate/services/*.js',
				'src/js/boilerplate/directives/*.js'
				],
				dest: 'webapp/js/boilerplate/app-build.js',
			},

		},
		jshint: {
			dev : {
				// define the files to lint
				files: {
					src : ['src/js/boilerplate/*.js', 'src/js/boilerplate/**/*.js']
				},
				options: {
					debug: true
				}
			}
		},

		watch: {
			js : {
				files: ['src/js/*.js', 'src/js/**/*.js'],
				//tasks: ['jshint', 'uglify:dev']
				tasks: ['debug']
			},

			grunt : {
				files: ['Gruntfile.js'],
				tasks: [
					'debug'
				]
			}
		}
	});


	// Load the plugins that provides the tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-text-replace');

	// tasks
	grunt.registerTask('prod',  [ 'jshint:prod', 'uglify:prod']);
	grunt.registerTask('debug', [ 'jshint:dev', 'concat']);
	grunt.registerTask('clean', [ 'shell:removeGeneratedFiles']);

	grunt.registerTask('default', ['prod']);
};