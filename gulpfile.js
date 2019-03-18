const gulp = require('gulp');
const server = require('browser-sync').create();

gulp.task('serve', () => {
  server.init({
    server: './dist',
    notify: false,
    open: true,
    port: 8080,
    ui: false
  });
});
