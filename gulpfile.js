const 
    // development mode?
    devBuild = false,

    // modules
    gulp = require('gulp'),
    htmlclean = require('gulp-htmlclean'),
    noop = require('gulp-noop'),

    // folders
    src = 'src/',
    build = 'public';

// HTML processing
function html(){
    return gulp.src(src + 'html/**/*')
        .pipe(devBuild ? noop() : htmlclean())
        .pipe(gulp.dest(build));
}

exports.html = html;