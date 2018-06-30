const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//COMPILE SASS
gulp.task('sass', function () {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

//WATCH & SERVE
gulp.task('serve', ['sass'], function () {
    browserSync.init({
        server:'./src'
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
});

//DEFAULT
gulp.task('default', ['serve']);