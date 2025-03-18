const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const sassGlob = require('gulp-sass-glob');

const paths = {
    scss: './src/scss/**/*.scss',
    css: './dist/css',
    html: './dist/**/*.html',
};


gulp.task('styles', () => {
    return gulp.src(paths.scss)
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cssnano())
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream());
});


gulp.task('serve', () => {
    browserSync.init({
        server: './dist',
        notify: false,
        open: false,
    });

    gulp.watch(paths.scss, gulp.series('styles'));
    gulp.watch(paths.html).on('change', browserSync.reload);
});


gulp.task('default', gulp.series('styles', 'serve'));