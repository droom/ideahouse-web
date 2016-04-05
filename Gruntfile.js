module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },

      sass: {
        files: [
        'src/sass/*.sass',
        'src/sass/modules/*.sass'
        ],
        tasks: ['sass'],
      },

      jade: {
        files: ['src/jade/*.jade', 'src/jade/partials/*.jade'],
        tasks: ['jade'],
      },


      concat: {
        files: ['src/js/*.js'],
        tasks: ['concat']
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


    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
        'src/lib/jquery-1.11.3.js',
        'src/lib/slick.js',
        'src/lib/jquery.tablesort.js',
        'src/lib/jquery.dotdotdot.js',
        'src/lib/semantic.js',
        'src/lib/notify.js',
        'src/lib/elementary.js',
        'src/js/*.js'
        ],
        dest: 'dist/js/ideahouse.js',
      },

      css: {
        src: [
        'src/lib/semantic.css',
        'src/lib/slick.css',
        'src/lib/slick-theme.css',
        'dist/css/style.css'
        ],
        dest: 'dist/css/ih.css',
      },
    },


    jade: {
      compile: {
        options: {
          pretty: false,
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

    uglify: {
      build: {
        src: 'dist/js/ideahouse.js',
        dest:'dist/js/ideahouse.min.js'
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
          src: 'dist/css/ih.css'
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
