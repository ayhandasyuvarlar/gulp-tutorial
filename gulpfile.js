import gulp from "gulp";

// gulp.task => create a  of task

// gulp.src  => source files

// gulp.test => target directory

// gulp.watch => monitoring and works task

// pipe => modify

gulp.task("hello-world", async () => {
  let message = await console.log("hello world");
});

gulp.task("copy", () => {
  gulp.src("./img/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("transferHtml", async () => {
  gulp.src("./src/*.html").pipe(await gulp.dest("./dist/public"));
});

gulp.task("taskName", () => {
  console.log("hello world");
});