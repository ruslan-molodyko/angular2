/**
 * Created by admin on 13.03.2016.
 */

var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload'),
    express = require('express'),
    tsProject = ts.createProject('tsconfig.json');

var server = express();
server.use(express.static('./public'));
server.use('/node_modules', express.static('./node_modules'));

gulp.task('serve', function() {
    server.listen(5000);
    livereload.listen();
});

gulp.task('default', ['ts', 'serve'], function () {
    gulp.watch(['./app/**/*', './public/index.html'], ['ts']);
});

gulp.task('clean-ts', function () {
    return gulp.src('./public/app/**/*', {read: false})
        .pipe(clean());
});

gulp.task('ts', ['clean-ts'], function() {

    gulp.src('./app/**/*')
        .pipe(gulp.dest('./public/app'));

    var tsResult = tsProject.src('./public/app')
        .pipe(ts(tsProject));
    tsResult.js.pipe(gulp.dest('./public/app'))
        .pipe(livereload());
});