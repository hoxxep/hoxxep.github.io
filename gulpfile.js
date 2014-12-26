var gulp = require('gulp'),
    copy = require('gulp-copy');

gulp.task('snarl', function() {
    return gulp.src('../Snarl/docs/**/*')
        .pipe(gulp.dest('Snarl/'));
});

gulp.task('build', ['snarl']);
gulp.task('default', ['build']);
