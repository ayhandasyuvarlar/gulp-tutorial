import gulp from "gulp";
import imagemin from "gulp-imagemin";
import GulpUglify from "gulp-uglify";
import GulpCleanCss from "gulp-clean-css";
import gulpConcat from "gulp-concat";
// gulp.task => create a  of task

// gulp.src  => source files

// gulp.test => target directory

// gulp.watch => monitoring and works task

// pipe => modify

gulp.task("hello-world", async () => {
  let message = await console.log("hello world");
});

gulp.task("copy", () => {
  gulp.src("./*.png").pipe(imagemin()).pipe(gulp.dest("./dist/images"));
});

gulp.task("transferHtml", async () => {
  gulp.src("./src/*.html").pipe(await gulp.dest("./dist/public"));
});

gulp.task("minJs", () => {
  gulp
    .src("./src/scripts/*")
    .pipe(GulpUglify())
    .pipe(gulp.dest("./dist/scripts"));
});

gulp.task("cssMin", () => {
  gulp
    .src("./src/style/*.css")
    .pipe(GulpCleanCss())
    .pipe(gulp.dest("./dist/style"));
});
gulp.task("concat", () => {
  gulp
    .src("./src/scripts/*.js")
    .pipe(GulpUglify())
    .pipe(gulpConcat("all.js"))
    .pipe(gulp.dest("./dist/scripts"));
});
gulp.task("taskName", () => {
  console.log("hello world");
});
