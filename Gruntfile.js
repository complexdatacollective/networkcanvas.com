/*global module:false*/


module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

    sass: {
        dist: {
            files: {
                'assets/css/style.css': '_sass/style.scss'
            }
        }
    },
    // watch changes to less files
    watch: {
        styles: {
            files: ["_sass/**/*"],
            tasks: ["sass"]
        },
        options: {
            livereload: true,
            spawn: false,
        },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);

}
