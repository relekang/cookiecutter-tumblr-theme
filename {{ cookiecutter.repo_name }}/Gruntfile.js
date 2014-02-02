module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      all: {
        files: {
          "dist/main.css": "src/main.less",
        }
      }
    },
    htmlbuild: {
      dist: {
        src: 'src/tumblr.html',
        dest: 'dist/tumblr.html',
        options: {
          styles: {
            main: ['dist/main.css'] 
          },
        },
      }
    },
    exec: {
      copy_template: {
        command: 'cat dist/tumblr.html | pbcopy'
      },
      cleanup: {
        command: 'rm -r dist'
      }
    },
    watch: {
      files: ['src/tumblr.html', 'src/main.less'],
      tasks: ['less', 'htmlbuild', 'exec']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['less', 'htmlbuild', 'exec']);
};
