var gulp = require('gulp');

gulp.task('amd', function () {
    var requirejs = require('requirejs'),
        config = {
            baseUrl: 'app',
            name: 'amd',
            out: 'dist/amd.js'
        };
    requirejs.optimize(config, function (buildResponse) {
        //buildResponse is just a text output of the modules
        //included. Load the built file for the contents.
        //Use config.out to get the optimized file contents.
        var contents = fs.readFileSync(config.out, 'utf8');
    }, function(err) {
        console.log("Error", err);
        //optimization err callback
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