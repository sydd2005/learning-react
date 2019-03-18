const gulp = require('gulp');
const server = require('browser-sync').create();

gulp.task('serve', function () {
    server.init({
      server: '.',
      notify: false,
      open: true,
      port: 8080,
      ui: false
    });
  });