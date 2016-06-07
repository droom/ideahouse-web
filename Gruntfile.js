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
        'src/sass/modules/*.sass',
        'src/sass/components/*.sass'
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
      },

      postcss: {
        files: [
        'src/sass/*.sass',
        'src/sass/modules/*.sass',
        'src/sass/components/*.sass'
        ],

        tasks: ['postcss'],
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/ideahouse.css': 'src/sass/main.sass',
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
        'src/lib/jquery.tablesorter.combined.js',
        'src/lib/jquery.dotdotdot.js',
        'src/lib/semantic.js',
        'src/lib/notify.js',
        'src/lib/elementary.js',
        'src/js/*.js'
        ],
        dest: 'dist/js/ideahouse.js',
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
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
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')()
          ]
        },
        dist: {
          src: 'dist/css/ideahouse.css'
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