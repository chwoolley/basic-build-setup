var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();

function handleError (error){
    console.log(error.toString())
    this.emit('end')
}

gulp.task('heya',function(){
    console.log('I live! gulp is alive!');
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('sass', function(){
    return gulp.src('app/stylesheets/scss/**/*.scss')
    .pipe(sass())
    .on('error', handleError)
    .pipe(gulp.dest('app/stylesheets/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('app'))
  });


gulp.task('watch', ['browserSync', 'sass'],function(){
    gulp.watch('app/stylesheets/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});