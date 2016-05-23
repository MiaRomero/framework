const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default', ['eslint', 'test']);

gulp.task('eslint', () => {
  gulp.src(['gulpfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js'])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', ['eslint'], () => {
  gulp.src(['test/**/*.js'])
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('default', ['test']);
