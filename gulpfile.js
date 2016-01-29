const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// lint
gulp.task('eslint', function() {
  return gulp.src(['**/*.js', '!node_modules/', '!gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// copy static assets
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['**/*.js'], { base : './' })
    .pipe(gulp.dest('dist'))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/express/**/*'
    ])
    .pipe(gulp.dest('dist/'))
});

gulp.task('serve', function () {
  nodemon({
    script: 'server.js',
    ext: 'html js',
    env: { 'NODE_ENV': 'development' },
    tasks: ['eslint']
  })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('build', ['eslint', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['build']);
