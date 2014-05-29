through     = require 'through2'
img         = require 'imagemagick-stream'
gutil       = require 'gulp-util'

PluginError = gutil.PluginError

# Cut that bitch in half
half (file) ->
  file.pipe(img().scale('50%'))

# Cut that bitch into four
quartered (file) ->
  file.pipe(img().scale('25%'))

module.exports = (options = {}) ->

  through.obj (file, enc, next) ->
    
    # @2x
    if file.relative.match /@2x/ig
      halved = half file.clone()
      next null, halved # Pass along "halved" image

    # @4x
    if file.relative.match /@4x/ig
      quartered = quarter file.clone()
      next null, quartered # Pass along "quartered" image

    # Pass the original
    next null, file