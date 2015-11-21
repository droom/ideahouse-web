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
        files: ['src/jade/*.jade', 'src/jade/partials/*.jade'],
        tasks: ['jade'],
      },
      concat: {
        files: ['src/js/*.js'],
        tasks: ['concat']
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

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
              'src/lib/jquery-1.11.3.js',
              'src/lib/slick.js',
              'src/lib/jquery.tablesort.js',
              'src/lib/jquery.dotdotdot.js',
              'src/lib/semantic.js',
              'src/lib/notify.js',
              'src/js/*.js'
              ],
        dest: 'dist/js/main.js',
      },
    },

    uglify: {
      build: {
        src: 'dist/js/main.js',
        dest:'dist/js/main.min.js'
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
        map: false,
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
          data: {}
        },
        files: [{
          expand: true,
          cwd: 'src/jade',
          src: [ '*.jade' ],
          dest: 'dist',
          ext: '.html'
        }]
      }
    },

    });


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-uncss');
// Default task(s).
grunt.registerTask('default', ['concat','uglify', 'sass', 'postcss','jade']);

};
