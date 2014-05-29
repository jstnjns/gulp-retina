// Generated by CoffeeScript 1.7.1
(function() {
  'use strict';
  var PLUGIN_NAME, PluginError, gm, gutil, through;

  PLUGIN_NAME = 'gulp-retina';

  through = require('through2');

  gm = require('gm');

  gutil = require('gulp-util');

  PluginError = gutil.PluginError;

  module.exports = function(options) {
    if (options == null) {
      options = {};
    }
    return through.obj(function(file, enc, next) {
      var clone, image;
      if (file.relative.match(/@2x/)) {
        clone = file.clone();
        image = gm(clone.contents).size({
          bufferStream: true
        }, function(err, size) {
          this.resize(size.width / 2, size.height / 2);
          return this.write(clone.path.replace('@2x', ''), gutil.noop);
        });
        this.push(clone);
      }
      this.push(file);
      return next();
    });
  };

}).call(this);
