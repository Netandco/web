var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var browser  = require('browser-sync');
var gulp     = require('gulp');
var panini   = require('panini');
var rimraf   = require('gulp-rimraf');
var sequence = require('run-sequence');
var sherpa   = require('style-sherpa');
var bower 	 = require('gulp-bower');

// Check for --production flag
var isProduction = !!(argv.production);

// Port to use for the development server.
var PORT = 8000;

// Browsers to target when prefixing CSS.
var COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// File paths
var PATHS = {
	bowerDir: './bower_components' ,
	destDir: './web',
  assets: [
    './app/Resources/assets/**/*'
  ],
  fonts: [
    './bower_components/fontawesome/fonts/**.*',
    './app/Resources/assets/fonts/*'
  ],
  sass: [
    './bower_components/bootstrap-sass/assets/stylesheets',
    './bower_components/fontawesome/scss',
    './app/Resources/assets/sass'
  ],
  javascript: [
    './bower_components/jquery/dist/jquery.min.js',
    './app/Resources/assets/js/jquery.nav.js',
    './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    './app/Resources/assets/js/wow.js',
    './app/Resources/assets/js/*.js'
  ]
};

// Delete the folders css and js
gulp.task('clean', function(done) {
  rimraf([PATHS.destDir + '/css', PATHS.destDir + '/js', PATHS.destDir + '/img', PATHS.destDir + '/fonts'], done);
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

  return gulp.src('./app/Resources/assets/sass/app.scss')
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

  return gulp.src('./app/Resources/assets/img/**/*')
    .pipe(imagemin)
    .pipe(gulp.dest(PATHS.destDir + '/img'));
});

// Build the "public" folder by running all of the above tasks
 gulp.task('build', function(done) {
   //sequence('clean', ['bower','fonts','sass','javascript','images'], done);
  sequence(['bower','fonts','sass','javascript','images'], done);  
});

// Start a server with LiveReload to preview the site in
gulp.task('server', ['build'], function() {
  browser.init({
    proxy: "http://localhost:8000/app_dev.php"
  });
});

  gulp.task('default', ['build', 'server'], function(){
	gulp.watch(['./app/Resources/assets/sass/*.scss', './bower_components/bootstrap-sass/assets/**/*.scss'], ['sass', browser.reload]); 
	gulp.watch(['./assets/js/**/*.js'], ['javascript', browser.reload]);
  gulp.watch(['./assets/img/**/*'], ['images', browser.reload]);
  // Sync changes in html
  gulp.watch(['./app/Resources/views/**/*.html.twig'], browser.reload)
});
