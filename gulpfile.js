var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload');

var PATHS = {
    src: 'src/**/*.ts',
    assetsModule: './src/script/module/*/assets/**/*',
    assetsModuleDist: './dist/modules/',
    assetsModuleDistStylus: './dist/modules/**/*.styl'
};

gulp.task('move', ['clean-assets'], function () {
    return gulp.src([PATHS.assetsModule])
        .pipe(gulp.dest(PATHS.assetsModuleDist))
        .pipe(livereload());
});

gulp.task('styles', ['move'], function() {
    gulp.src([PATHS.assetsModuleDistStylus])
        .pipe(stylus({compress : false}).on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest(PATHS.assetsModuleDist))
        .pipe(livereload());
});

gulp.task('clean-assets', function (done) {
    var del = require('del');
    del([PATHS.assetsModuleDist], done);
});

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('ts2js', function () {
    var typescript = require('gulp-typescript');
        tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src([PATHS.src, 'node_modules/angular2/typings/browser.d.ts'])
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('play', ['clean-assets', 'move', 'styles', 'ts2js'], function () {
    var http = require('http'),
        connect = require('connect'),
        serveStatic = require('serve-static'),
        open = require('open'),
        port = 5000, app;

    gulp.watch(PATHS.src, ['ts2js']);
    gulp.watch(PATHS.assetsModule, ['move', 'styles']);

    app = connect()
        .use(serveStatic(__dirname + '/dist'))
        .use(serveStatic(__dirname + '/src'))
        .use('/node_modules', serveStatic(__dirname + '/node_modules'));
    http.createServer(app).listen(port, function () {
        livereload.listen();
    });
});

gulp.task('default', ['play']);
