var gulp = require ('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var paths = {
	'nodejs': './node_modules/',
	'lib': './lib/assets/',
	'assets': './public/assets/'
}

gulp.task('styles', function()
  {
  	return gulp.src([
  		paths.lib+'sass/*.scss'
  	])
  	.pipe(sass())
  	.pipe(concat('app.css'))
  	.pipe(gulp.dest(paths.assets+'css'));
  }
);

gulp.task('compress',function(){
  return gulp.src(paths.lib+'js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.lib+'js/mins'));
});

gulp.task('scripts', function(){
	gulp.src([
    paths.lib+'js/*.js'
		])
	.pipe(concat('app.js'))
  .pipe(uglify())
	.pipe(gulp.dest(paths.assets+'js'));
	return gulp.src([
    paths.nodejs+'jquery/dist/jquery.min.js'
    ,paths.nodejs+'angular/angular.min.js'
		])
	.pipe(concat({ path: './modules.js' }))
  .pipe(uglify())
	.pipe(gulp.dest(paths.assets+'js'));
});

gulp.task('scripts-dev', function(){
	return gulp.src([
    paths.lib+'js/*.js'
		])
	.pipe(concat('app.js'))
  .pipe(uglify())
	.pipe(gulp.dest(paths.assets+'js'));
});

gulp.task('watch', function(){
	gulp.watch(paths.lib+'sass/*.scss',['styles']);
	gulp.watch(paths.lib+'js/*.js',['scripts-dev']);
});

gulp.task('default', ['styles', 'scripts']);