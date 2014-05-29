'use strict'

PLUGIN_NAME = 'gulp-retina'

through     = require 'through2'
gm          = require 'gm'
gutil       = require 'gulp-util'

PluginError = gutil.PluginError

module.exports = (options = {}) ->

  through.obj (file, enc, next) ->
    
    if file.relative.match /@2x/
      clone = file.clone()
      image = gm(clone.contents)
        .size { bufferStream: true }, (err, size) ->
          @resize size.width / 2, size.height / 2
          @write clone.path.replace('@2x', ''), gutil.noop

      @push clone

    # Always pass the original
    @push file
    next()