import gulp from "gulp";
import imagemin from "gulp-imagemin";
// gulp.task => create a  of task

// gulp.src  => source files

// gulp.test => target directory

// gulp.watch => monitoring and works task

// pipe => modify

gulp.task("hello-world", async () => {
  let message = await console.log("hello world");
});

gulp.task("copy", () => {
  gulp.src("./*.png")
  .pipe(imagemin())
  .pipe(gulp.dest("./dist/images"));
});

gulp.task("transferHtml", async () => {
  gulp.src("./src/*.html").pipe(await gulp.dest("./dist/public"));
});

gulp.task("taskName", () => {
  console.log("hello world");
});
