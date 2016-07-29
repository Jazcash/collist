var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	gulp.src('collist.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(cssnano())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
	gulp.watch('collist.scss', ['sass']);
});

gulp.task('default', [
	'sass',
	'watch'
]);
