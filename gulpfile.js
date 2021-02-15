const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

function browsersync() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
    online: true,
  });
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.min.js", "app/js/app.js"])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js/"))
    .pipe(browserSync.stream());
}

function styles() {
  return src("app/scss/main.scss")
    .pipe(sass())
    .pipe(concat("app.min.css"))
    .pipe(dest("app/css/"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/src/**/*")
    .pipe(imagemin())
    .pipe(dest("app/").pipe(dest("app/images/dest/")));
}

function startWatch() {
  watch("app/scss/main.scss", styles);
  watch(["app/**/*.js", "!app/**/*min.js"], scripts);
  watch("app/**/*.html").on("change", browserSync.reload);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.default = parallel(styles, scripts, browsersync, startWatch);
