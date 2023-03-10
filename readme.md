# What is Gulp.js ?

![img](./dist/images/download.png)

### Gulp.js is perfect for Front-End developers. It is a Node.js based javascript tool that automates the workflow. With the help of Gulp.js, we can automate the processes that require a lot of effort .

- It is open source javascript tool
- Task runner or task runner.
- Works with nodejs or npm
- Frontend build tool
- Used for repetitive or time-consuming operations

### When using gulp, the basic logic is as follows, first a gulpfile.js file is created, this is the page with the operations you will do with gulp. Then you work in src, when your last process is finished, we will present the site to the live model, and you send the final version to the dist folder with gulp.

# Gulp dowland

- one step

```js
npm install -g gulp
```

- two step

#### create new folder

- three step

```jsx
- step one => npm init
- step two => npm install --save-g gulp
```

- four step

### create 'gulpfile.js'

```jsx
// gulp.task => create a  of task

// gulp.src  => source files

// gulp.test => target directory

// gulp.watch => monitoring and works task

// pipe => modify
```

![img](/dist/images/task.png)
![img](/dist/images/img-1.png)

```js
gulp 'taskName'
```

![img](/dist/images/img-2.png)

### gulp with file and folder transfer process

```js
gulp.task("transferImg", () => {
  gulp.src("./img/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("transferHtml", () => {
  gulp.src("./src/*.html").pipe(gulp.dest("./dist/public"));
});
```

# Gulp Imagemin

### Gulp.js is an open source library that allows us to reduce the size of images.

- download

```js
npm install --save-dev gulp-imagemin
```

```js
import imagemin from "gulp-imagemin";
gulp.task("copy", () => {
  gulp.src("./*.png").pipe(imagemin()).pipe(gulp.dest("./dist/images"));
});
```

# gulp-uglify

### UglifyJS is a JavaScript parser/compressor/beautifier toolkit. It can be used to combine and minify JavaScript assets so that they require less HTTP requests and make your site load faster.

- download

```js
npm install --save-dev gulp-uglify
```

```js
gulp.task("minJs", () => {
  gulp
    .src("./src/scripts/*")
    .pipe(GulpUglify())
    .pipe(gulp.dest("./dist/scripts"));
});
```

<div style="display: flex;">
 <div style="width:50%">
   <h1>Enter value</h1>
  <img src="./dist/images/JSenter.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Output</h1>
  <img src="./dist/images/JSout.png" alt="" width="100%"></div>
</div>

<br/>
<br/>

# gulp-clean-css

### It minifies (compresses) css files by removing unnecessary spaces, thus minimizing the file size.

- download

```jsx
npm install gulp-clean-css --save-dev
```

```js
gulp.task("cssMin", () => {
  gulp
    .src("./src/style/*.css")
    .pipe(GulpCleanCss())
    .pipe(gulp.dest("./dist/style"));
});
```

<div style="display: flex;">
 <div style="width:50%">
   <h1>Enter value</h1>
  <img src="./dist/images/cssenter.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Output</h1>
  <img src="./dist/images/cssout.png" alt="" width="100%"></div>
</div>

# gulp-concat

### gulp-concat combines CSS and JavaScript files and presents them as a single file, while gulp-watch monitors changes in folders and files and performs the specified task(s) in case of changes.

```jsx
npm install gulp-concat --save-dev
```

```js
gulp.task("concat", () => {
  gulp
    .src("./src/scripts/*.js")
    .pipe(GulpUglify())
    .pipe(gulpConcat("all.js"))
    .pipe(gulp.dest("./dist/scripts"));
});
```

<div style="display: flex;">
 <div style="width:50%">
   <h1>Enter value</h1>
  <img src="./dist/images/concatenter.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Output</h1>
  <img src="./dist/images/concatout.png" alt="" width="100%"></div>
</div>

# gulp-sass

### gulp-sass library converts .scss files to .css files

- download

```js
npm install --save-dev gulp-sass
npm install sass
```

```jsx
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

gulp.task("sass", () => {
  gulp
    .src("./src/style/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/style/"));
});
```

<div style="display: flex;">
 <div style="width:50%">
   <h1>Enter value</h1>
  <img src="./dist/images/sassenter.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Output</h1>
  <img src="./dist/images/sassout.png" alt="" width="100%"></div>
</div>

# gulp-watch

### Allows watching globs and running a task when a change occurs. Tasks are handled uniformly with the rest of the task system.

```js
gulp.task("watch", () => {
  gulp.watch("./src/style/**/*.scss", gulp.series("sass"));
});
```

<div style="display: flex;">
 <div style="width:50%">
   <h1>Watch start</h1>
  <img src="./dist/images/watchstart.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Enter value</h1>
  <img src="./dist/images/watchenter.png" alt="" width="100%"></div>
</div>

<div style="display: flex;">
 <div style="width:50%">
   <h1>Watch finish</h1>
  <img src="./dist/images/watch-finish.png" alt="" width="100%"></div>
 <div style="width:50%">
   <h1>Output</h1>
  <img src="./dist/images/watchout.png" alt="" width="100%"></div>
</div>
