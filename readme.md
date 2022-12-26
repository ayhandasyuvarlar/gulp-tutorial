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
gulp.task("transferHtml", () => {
  gulp.src("./img/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("transferHtml", () => {
  gulp.src("./src/*.html").pipe(gulp.dest("./dist/public"));
});
```
