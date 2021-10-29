var gulp = require('gulp');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var vhfix = require('postcss-100vh-fix');

gulp.task('css', function() {
  var plugin = [
    autoprefixer(),
    cssnano(),
    vhfix()
  ];
  return gulp.src('./css/*.css')
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./public'));
});

gulp.task('serve', gulp.series('css'), function() {
  gulp.watch("./css/*.css", ['css']);
});

gulp.task('default', gulp.series('serve'));