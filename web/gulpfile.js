var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var panini   = require('panini');
var rimraf   = require('rimraf');
var sequence = require('run-sequence');
var sherpa   = require('style-sherpa');
var bower 	 = require('gulp-bower');

var config = {
     sassPath: './assets/sass',
     bowerDir: './bower_components' 
}

// Check for --production flag
var isProduction = !!(argv.production);

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths
var PATHS = {
	bowerDir: './bower_components' ,
	destDir: './public',
  assets: [
    './assets/**/*'
  ],
  fonts: [
    './bower_components/fontawesome/fonts/**.*',
    './assets/fonts/*'
  ],
  sass: [
    './bower_components/bootstrap-sass/assets/stylesheets',
    './bower_components/fontawesome/scss',
    './assets/sass'
  ],
  javascript: [
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap-sass/assets/javascript/bootstrap.js',
    './assets/js/*.js'
  ]
};

// Delete the "public" folder
gulp.task('clean', function(done) {
  rimraf(PATHS.destDir, done);
});

// Copy files out of the assets folder
gulp.task('copy', function() {
  gulp.src(PATHS.assets)
    .pipe(gulp.dest(PATHS.destDir));
});


// Bower
gulp.task('bower', function() { 
  return bower()
     .pipe(gulp.dest(PATHS.bowerDir)) 
});

// Fonts
gulp.task('fonts', function() { 
  return gulp.src(PATHS.fonts) 
    .pipe(gulp.dest(PATHS.destDir + '/fonts')); 
});

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() { 

  var minifycss = $.if(isProduction, $.minifyCss());

  return gulp.src('assets/sass/app.scss')
     .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe(minifycss)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.destDir + '/css'));
});

// Combine JavaScript into one file
// In production, the file is minified
gulp.task('javascript', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe(uglify)
    .pipe($.if(!isProduction, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.destDir + '/js'));
});

// Copy images to the "public" folder
// In production, the images are compressed
gulp.task('images', function() {
  var imagemin = $.if(isProduction, $.imagemin({
    progressive: true
  }));

  return gulp.src('assets/img/**/*')
    .pipe(imagemin)
    .pipe(gulp.dest(PATHS.destDir + '/img'));
});


 gulp.task('build', function(done) {
   sequence('clean', ['bower','fonts','sass','javascript','images'], done);  
});

  gulp.task('default', ['build'], function(){
	gulp.watch(config.sassPath + '/*.scss', ['sass']); 
	gulp.watch(['./assets/js/**/*.js'], ['javascript']);
  gulp.watch(['./assets/img/**/*'], ['images']);
});
