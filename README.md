# gulp-retina

Gulp.js plugin for automating multiple image resolution creation.

## Getting Started

First, download and install GraphicsMagick or ImageMagick. In Mac OS X, you can simply use Homebrew and do:

```
brew install imagemagick
brew install graphicsmagick
```

## Usage

```
var gulp = require('gulp'),
    retina = require('gulp-retina');

gulp.task('default', function() {
  gulp.src('in/**/*')
    .pipe(retina())
    .pipe(gulp.dest('out/'))
});
```

