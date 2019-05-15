const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const browserSync  = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const CONF = {
	SASS : {
		SOURCE : 'src/css/**/*.scss',
		OUTPUT : './public/assets/css',
	},
	JS : {
		SOURCE : 'src/js/app/**/*.js',
		LIB   : 'src/js/lib/**/*.js',
		OUTPUT : './public/assets/js',
	},
	HTML : {
		SOURCE : './public/**/*.html',
	},
	BROWSERSYNC : {
		DOCUMENT_ROOT : './public',
		INDEX : 'index.html',
		GHOSTMODE : {
			clicks : false,
			forms  : false,
			scroll : false,
		}
	}
};

function css() {
  return src(CONF.SASS.SOURCE)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest(CONF.SASS.OUTPUT))
}

function jslib() {
  return src(CONF.JS.LIB, { sourcemaps: true })
		.pipe(
			babel({
				presets: ['@babel/env'],
			}),
		)
    .pipe(concat('lib.min.js'))
		.pipe(uglify())
    .pipe(dest(CONF.JS.OUTPUT, { sourcemaps: true }))
}

function jscommon() {
	return webpackStream(webpackConfig, webpack)
    .pipe(dest(CONF.JS.OUTPUT, { sourcemaps: true }))
}
// function jscommon() {
//   return src(CONF.JS.SOURCE, { sourcemaps: true })
// 		.pipe(
// 			babel({
// 				presets: ['@babel/env'],
// 			}),
// 		)
//     .pipe(concat('common.min.js'))
// 		.pipe(uglify())
//     .pipe(dest(CONF.JS.OUTPUT, { sourcemaps: true }))
// }

const browserSyncOption = {
  port: 5000,
  server : {
    baseDir : CONF.BROWSERSYNC.DOCUMENT_ROOT,
    index : CONF.BROWSERSYNC.INDEX,
  },
  ghostMode : CONF.BROWSERSYNC.GHOSTMODE,
  reloadOnRestart: true,
};

function browsersync(done) {
  browserSync.init(browserSyncOption);
  done();
}

function watchFiles(done) {
  const browserReload = () => {
    browserSync.reload();
    done();
  };
	watch(CONF.HTML.SOURCE).on('change', series(browserReload));
  watch(CONF.SASS.SOURCE).on('change', series(css, browserReload));
	watch(CONF.JS.LIB).on('change', series(jslib, browserReload));
  watch(CONF.JS.SOURCE).on('change', series(jscommon, browserReload));
}


exports.jslib = jslib;
exports.jscommon = jscommon;
exports.css = css;
exports.default = series(parallel(css, jslib, jscommon), series(browsersync, watchFiles));