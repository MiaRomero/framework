const gulp = require('gulp');
// const gutil = require('gulp-util');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default', ['eslint', 'test']);

gulp.task('eslint', () => {
  gulp.src(['gulpfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js'])
  .pipe(eslint())
  .pipe(eslint.reporter('jshint-stylish'));
});

gulp.task('test', ['eslint'], () => {
  gulp.src(['test/**/*.js'])
  .pipe(mocha({ reporter: 'nyan' }));
});
