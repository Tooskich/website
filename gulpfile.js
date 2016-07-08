var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();

// Config
var config = {
     bowerDir: './app/bower_components' ,
     cssPath: './dist/styles',
     htmlPath: './app',
     jsPath: './app/scripts',
     sassPath: './app/styles',
}

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

gulp.task('bower', function() { 
    return $.bower()
         .pipe(gulp.dest(config.bowerDir)) ;
});

gulp.task('html', function () {
    return gulp.src(config.htmlPath + '/*.html')
        .pipe($.connect.reload());
});

gulp.task('styles', function () {
    return gulp.src(config.sassPath + '/main.scss')
        .pipe($.sass({
            style: 'expanded',
            loadPath: [
                config.sassPath,
                config.bowerDir
            ]
        }))
        .pipe(gulp.dest(config.sassPath))
        .pipe($.cleanCss())
        .pipe(gulp.dest(config.cssPath))
        .pipe($.connect.reload());
});

gulp.task('scripts', function() {
    return gulp.src([config.jsPath + '/*.js', config.jsPath + '/**/*.js'])
        .pipe($.uglify('app.min.js', {
            outSourceMap: true
        }))
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.connect.reload());
});

gulp.task('watch', function () {
    // Watch .html files
    gulp.watch([config.htmlPath + '/*.html'], ['html']);

    // Watch .scss files
    gulp.watch([config.sassPath + '/**/*.scss'], ['styles']);

    // Watch .js files
    gulp.watch([config.jsPath + '/*.js', config.jsPath + '/**/*.js'], ['scripts']);
});

gulp.task('clean', function () {
    return gulp.src(['dist'], {read: false})
        .pipe($.clean());
});

// Build
gulp.task('build', ['clean', 'bower', 'html', 'styles', 'scripts']);

// Default task
gulp.task('default', ['clean', 'build', 'connectDev', 'watch']);
