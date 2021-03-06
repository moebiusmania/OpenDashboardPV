module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      style:{
        files: {
          "app/css/style.css": "app/less/main.less"
        }
      },
      deploy:{
        options:{
          compress: true
        },
        files: {
          "app/css/style.min.css": "app/less/main.less"
        }
      }
    },
    watch: {
      all:{
        files: ['app/less/*.less'],
        tasks: ['less:style']
      },
      styles:{
        files: ['app/less/*.less'],
        tasks: ['less:style']
      }
    },
    notify_hooks: {
      options: {
        enabled: true,
        title: "OpenDashboard | Pavia", 
        success: true, 
        duration: 3 
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch:all']);
  grunt.registerTask('compile', ['less:style']);
  grunt.registerTask('deploy', ['less:deploy']);

  grunt.task.run('notify_hooks');
};