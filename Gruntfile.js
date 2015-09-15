module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['src/sass/*.sass'],
        tasks: ['sass'],
      },
      jade: {
        files: ['src/jade/*.jade'],
        tasks: ['jade'],
      },
      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify'],
      }
    },

    uglify: {
      build: {
        src: 'src/js/ih-web.js',
        dest:'dist/js/ih-web.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/style.css': 'src/sass/style.sass',
        }
      }
    },




    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "dist/browse.html": ["src/jade/browse.jade"],
          "dist/gate.html": ["src/jade/gate.jade"],
          "dist/product.html": ["src/jade/product.jade"],
          "dist/clearance.html": ["src/jade/clearance.jade"],

          "dist/search-quick.html": ["src/jade/search-quick.jade"],
          "dist/search-advanced.html": ["src/jade/search-advanced.jade"],
          "dist/search-results.html": ["src/jade/search-results.jade"]

        }
      }
    }


  });


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'jade']);

};
