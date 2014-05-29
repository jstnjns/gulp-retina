through     = require 'through2'
img         = require 'imagemagick-stream'
gutil       = require 'gulp-util'

PluginError = gutil.PluginError

module.exports = (options = {}) ->

  through.obj (file, enc, next) ->

    next()

