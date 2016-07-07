var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();


gulp.task('connectDev', function () {
  $.connect.server({
    root: ['app', 'tmp'],
    port: 8000,
    livereload: true
  });
});

gulp.task('connectDist', function () {
  $.connect.server({
    root: 'dist',
    port: 8001,
    livereload: true
  });
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe($.connect.reload());
});

gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({
          style: 'expanded',
          loadPath: ['app/bower_components']
        }))
        .pipe(gulp.dest('app/styles'))
        .pipe($.minifycss())
        .pipe(gulp.dest('dist/styles'))
        .pipe($.connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src(['app/scripts/*.js', 'app/scripts/**/*.js'])
        .pipe($.uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/scripts'));
        .pipe($.connect.reload());
});

gulp.task('watch', function () {
    // Watch .html files
    gulp.watch(['app/*.html'], ['html']);

    // Watch .scss files
    gulp.watch(['app/styles/**/*.scss'], ['styles']);

    // Watch .js files
    gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], ['scripts']);
});

gulp.task('clean', function () {
    return gulp.src(['dist'], {read: false})
        .pipe($.clean());
});

// Build
gulp.task('build', ['clean', 'html', 'styles', 'scripts']);

// Default task
gulp.task('default', ['clean', 'build', 'connectDev', 'watch']);
