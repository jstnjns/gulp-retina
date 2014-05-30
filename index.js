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
      var clone, image, stream;
      stream = this;
      this.push(file);
      if (file.relative.match(/@2x/)) {
        clone = file.clone();
        return image = gm(clone.contents).size({
          bufferStream: true
        }, function(err, size) {
          this.resize(size.width / 2, size.height / 2);
          return this.toBuffer(function(err, buffer) {
            clone.contents = buffer;
            clone.path = clone.path.replace('@2x', '');
            stream.push(clone);
            return next();
          });
        });
      } else {
        return next();
      }
    });
  };

}).call(this);
