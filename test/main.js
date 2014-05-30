var retina = require('../')
var should = require('should');
var gutil = require('gulp-util');
var fs = require('fs');

require('mocha');

describe('gulp-retina', function() {
  describe('retina()', function() {

    it('should pass through the original image', function(done) {
      var fixture = __dirname + '/fixtures/screen@2x.png',
          expected = __dirname + '/expected/screen@2x.png';

      retina()
        .on('error', done)
        .on('data', function(file) {
          String(file.contents).should.equal(String(fs.readFileSync(expected)));

          done();
        })
        .write(new gutil.File({
          path: fixture,
          contents: fs.readFileSync(fixture)
        }));
    });

    it('should create a downsized copy of @2x images', function(done) {
      var fixture = __dirname + '/fixtures/screen@2x.png',
          expected = __dirname + '/expected/screen.png';

      retina()
        .on('error', done)
        .on('data', function(file) {
          String(file.contents).should.equal(String(fs.readFileSync(expected)));

          done();
        })
        .write(new gutil.File({
          path: fixture,
          contents: fs.readFileSync(fixture)
        }));
    });

  });
});