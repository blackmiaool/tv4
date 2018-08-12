const gulp = require("gulp");
const concat = require("gulp-concat");
const webpack = require("webpack");
const gutil = require("gulp-util");
let mode;

gulp.task("concat", function() {
    return gulp
        .src([
            "./LICENSE.txt",
            "./source/_polyfill.js",
            "./source/uri-template-fill.js",
            "./source/validate.js",
            "./source/basic.js",
            "./source/numeric.js",
            "./source/string.js",
            "./source/array.js",
            "./source/object.js",
            "./source/combinations.js",
            "./source/hypermedia.js",
            "./source/resolve-uri.js",
            "./source/normalise-schema.js",
            "./source/error-reporter.js",
            "./source/api.js"
        ])
        .pipe(concat("concat.js"))
        .pipe(gulp.dest("./"));
});
gulp.task("webpack", ["concat"], function(callback) {
    webpack(
        {
            mode,
            entry: "./concat.js",
            output: {
                path: __dirname,
                filename: "tv4.js",
                libraryTarget: "umd",
                globalObject: "this"
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"],
                                plugins: []
                            }
                        }
                    }
                ]
            }
        },
        function(err, stats) {
            // console.log(111,err)
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log(
                "[webpack]",
                stats.toString({
                    // output options
                })
            );
            callback();
        }
    );
});
gulp.task("set-dev", function() {
    mode = "development";
});
gulp.task("set-build", function() {
    mode = "production";
});
gulp.task("dev", ["set-dev", "webpack"]);
gulp.task("build", ["set-build", "webpack"]);
console.log(process.argv[2]);
if (process.argv[2] === "dev") {
    gulp.watch(["./source/**/*.js"], ["dev"]);
}
