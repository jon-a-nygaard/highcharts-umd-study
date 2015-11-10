var gulp = require('gulp');

gulp.task('amd', function () {
    var requirejs = require('requirejs'),
        config = {
            baseUrl: 'app',
            name: 'amd',
            out: 'dist/amd.js'
        };
    requirejs.optimize(config, function (buildResponse) {
        var contents = fs.readFileSync(config.out, 'utf8');
    }, function(err) {
        console.log("Error", err);
    });
});

gulp.task('common', function () {
    var browserify = require('browserify'),
        fs = require('fs');
    var bundle = browserify('app/common.js')
        .bundle(function (err, buf) {
            fs.writeFileSync('./dist/common.js', buf);
        });
});

gulp.task('babel', function () {
    var babel = require('gulp-babel');
    gulp.src('node_modules/highcharts-release/test.js')
        .pipe(babel({
            modules:"amd"
        }))
        .pipe(gulp.dest('dist/amd'));
});

gulp.task('react', function () {
    var browserify = require('browserify'),
        babelify = require('babelify'),
        source = require('vinyl-source-stream');

    browserify('app/react-main.js')
        .transform(babelify)
        .bundle()
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(source('react-main.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('server', function () {
    var liveServer = require('live-server'),
        params = {
            port: 8181, // Set the server port. Defaults to 8080. 
            // host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0. 
            // root: "build", // Set root directory that's being server. Defaults to cwd. 
            open: false, // When false, it won't load your browser by default. 
            // ignore: 'scss,my/templates', // comma-separated string for paths to ignore 
            file: "react.html", // When set, serve this file for every 404 (useful for single-page applications) 
            wait: 200 // Waits for all changes, before reloading. Defaults to 0 sec. 
        };
    liveServer.start(params);
});