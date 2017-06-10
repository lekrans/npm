const GULP = require('gulp');
const CONNECT = require('gulp-connect');

const JS_SOURCES = [
   'script.js',
];

const CSS_SOURCES = ['style.css'];
const HTML_SOURCES = ['index.html'];


GULP.task('js', function() {
   GULP.src(JS_SOURCES)
   .pipe(CONNECT.reload());
});

GULP.task('css', function() {
   GULP.src(CSS_SOURCES)
   .pipe(CONNECT.reload());
});

GULP.task('html', function() {
   GULP.src(HTML_SOURCES)
   .pipe(CONNECT.reload());
});


GULP.task('watch', function() {
   GULP.watch(JS_SOURCES, ['js']);
   GULP.watch(CSS_SOURCES, ['css']);
   GULP.watch(HTML_SOURCES, ['html']);
});

GULP.task('connect', function() {
   CONNECT.server({
       root: './',   //den här sökvägen är projektspecifikt
       livereload: true
   });
});

GULP.task('default', ['js', 'html', 'css', 'connect', 'watch']);