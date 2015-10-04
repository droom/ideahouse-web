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
      },
      postcss: {
        files: ['src/sass/*.sass'],
        tasks: ['postcss'],
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

    postcss: {
      options: {
        map: true, // inline sourcemaps
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'dist/css/maps/' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/style.css'
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
          "dist/gate.html": ["src/jade/gate.jade"],
          "dist/gate-reminder.html": ["src/jade/gate-reminder.jade"],

          "dist/gate-register-1.html": ["src/jade/gate-register-1.jade"],
          "dist/gate-register-2-corporate.html": ["src/jade/gate-register-2-corporate.jade"],
          "dist/gate-register-2-reseller.html": ["src/jade/gate-register-2-reseller.jade"],
          "dist/gate-register-3.html": ["src/jade/gate-register-3.jade"],

          "dist/browse.html": ["src/jade/browse.jade"],
          "dist/product.html": ["src/jade/product.jade"],
          "dist/clearance.html": ["src/jade/clearance.jade"],
          "dist/popular.html": ["src/jade/popular.jade"],
          "dist/history.html": ["src/jade/history.jade"],
          "dist/new.html": ["src/jade/new.jade"],
          "dist/offer.html": ["src/jade/offer.jade"],
          "dist/bookmarks.html": ["src/jade/bookmarks.jade"],

          "dist/search-quick.html": ["src/jade/search-quick.jade"],
          "dist/search-quick-results.html": ["src/jade/search-quick-results.jade"],
          "dist/search-advanced.html": ["src/jade/search-advanced.jade"],
          "dist/search-results.html": ["src/jade/search-results.jade"],
          "dist/search-results-none.html": ["src/jade/search-results-none.jade"]

        }
      }
    }


  });


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-postcss');

// Default task(s).
grunt.registerTask('default', ['uglify', 'sass', 'postcss', 'jade']);

};
