const { src, dest} = require("gulp");
const scss = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const browserSync = require("browser-sync").create();


// Static server
function browsersync() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}
function css() {
    return src("app/scss/styles.scss")
      .pipe(scss())
      .pipe(minifycss())
      .pipe(dest("app/css"));
   
  }
  

exports.css = css;
exports.browsersync = browsersync;
exports.default = (css , browsersync);
