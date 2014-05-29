'use strict'

PLUGIN_NAME = 'gulp-retina'

through     = require 'through2'
gm          = require 'gm'
gutil       = require 'gulp-util'

PluginError = gutil.PluginError

module.exports = (options = {}) ->

  through.obj (file, enc, next) ->
    stream = this
    
    # TODO Dynamic modifiers
    if file.relative.match /@2x/

      clone = file.clone()
      image = gm(clone.contents)
        .size { bufferStream: true }, (err, size) ->
          # Resize
          # TODO Dynamic dividers
          @resize size.width / 2, size.height / 2

          # Build a buffer, push it through
          @toBuffer (err, buffer) ->
            clone.contents = buffer
            clone.path = clone.path.replace('@2x', '')
            stream.push clone
            next()

    # Always pass the original
    @push file