let gulp        = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    rename      = require("gulp-rename"),
    csso        = require('gulp-csso');

gulp.task('sass', () =>
    sass('scss/box-shadows.scss', {sourcemap: true}).on('error', sass.logError)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'))
);

gulp.task('csso', function () {
    return gulp.src('./**/box-shadows.css')
        .pipe(rename('./box-shadows.min.css'))
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ['sass','js', 'css'], function () {
    gulp.watch('scss/*.scss', ['sass'])
});

gulp.task('default', ['watch']);
