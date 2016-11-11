var expect = require('chai').expect
var CenterIt = require('./index.js')

describe('"cover" center type', function () {
  describe('same width / height ratio', function () {
    describe('container: 100 * 100, origin item: 50 * 50', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 50,
        originHeight: 50,
        centerType: 'cover'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 2', function () {
        expect(centerIt.ratio()).to.equal(2)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('container: 100 * 100, origin item: 200 * 200', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 200,
        originHeight: 200,
        centerType: 'cover'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 0.5', function () {
        expect(centerIt.ratio()).to.equal(0.5)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('same size: 100 * 100', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 100,
        originHeight: 100,
        centerType: 'cover'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 1', function () {
        expect(centerIt.ratio()).to.equal(1)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
  })

  describe('origin item is wider than container', function () {
    describe('container: 100 * 100, origin item: 80 * 40', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 80,
        originHeight: 40,
        centerType: 'cover'
      })
      it('should have width as 200', function () {
        expect(centerIt.width()).to.equal(200)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 2.5', function () {
        expect(centerIt.ratio()).to.equal(2.5)
      })
      it('should have offset (top: 0, left: -50)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(-50)
      })
    })
    describe('container: 100 * 100, origin item: 400 * 200', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 400,
        originHeight: 200,
        centerType: 'cover'
      })
      it('should have width as 200', function () {
        expect(centerIt.width()).to.equal(200)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 0.5', function () {
        expect(centerIt.ratio()).to.equal(0.5)
      })
      it('should have offset (top: 0, left: -50)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(-50)
      })
    })
  })

  describe('origin item is heigher than container', function () {
    describe('container: 100 * 100, origin item: 40 * 80', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 40,
        originHeight: 80,
        centerType: 'cover'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 200', function () {
        expect(centerIt.height()).to.equal(200)
      })
      it('should have ratio as 2.5', function () {
        expect(centerIt.ratio()).to.equal(2.5)
      })
      it('should have offset (top: -50, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(-50)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('container: 100 * 100, origin item: 200 * 400', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 200,
        originHeight: 400,
        centerType: 'cover'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 200', function () {
        expect(centerIt.height()).to.equal(200)
      })
      it('should have ratio as 0.5', function () {
        expect(centerIt.ratio()).to.equal(0.5)
      })
      it('should have offset (top: -50, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(-50)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
  })
})

describe('"contain" center type', function () {
  describe('same width / height ratio', function () {
    describe('container: 100 * 100, origin item: 50 * 50', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 50,
        originHeight: 50,
        centerType: 'contain'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 2', function () {
        expect(centerIt.ratio()).to.equal(2)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('container: 100 * 100, origin item: 200 * 200', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 200,
        originHeight: 200,
        centerType: 'contain'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 0.5', function () {
        expect(centerIt.ratio()).to.equal(0.5)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('same size: 100 * 100', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 100,
        originHeight: 100,
        centerType: 'contain'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 1', function () {
        expect(centerIt.ratio()).to.equal(1)
      })
      it('should have offset (top: 0, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
  })

  describe('origin item is wider than container', function () {
    describe('container: 100 * 100, origin item: 80 * 40', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 80,
        originHeight: 40,
        centerType: 'contain'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 50', function () {
        expect(centerIt.height()).to.equal(50)
      })
      it('should have ratio as 1.25', function () {
        expect(centerIt.ratio()).to.equal(1.25)
      })
      it('should have offset (top: 25, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(25)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
    describe('container: 100 * 100, origin item: 400 * 200', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 400,
        originHeight: 200,
        centerType: 'contain'
      })
      it('should have width as 100', function () {
        expect(centerIt.width()).to.equal(100)
      })
      it('should have height as 50', function () {
        expect(centerIt.height()).to.equal(50)
      })
      it('should have ratio as 0.25', function () {
        expect(centerIt.ratio()).to.equal(0.25)
      })
      it('should have offset (top: 25, left: 0)', function () {
        expect(centerIt.offset().top).to.equal(25)
        expect(centerIt.offset().left).to.equal(0)
      })
    })
  })

  describe('origin item is heigher than container', function () {
    describe('container: 100 * 100, origin item: 40 * 80', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 40,
        originHeight: 80,
        centerType: 'contain'
      })
      it('should have width as 50', function () {
        expect(centerIt.width()).to.equal(50)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 1.25', function () {
        expect(centerIt.ratio()).to.equal(1.25)
      })
      it('should have offset (top: 0, left: 25)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(25)
      })
    })
    describe('container: 100 * 100, origin item: 200 * 400', function () {
      var centerIt = new CenterIt({
        containerWidth: 100,
        containerHeight: 100,
        originWidth: 200,
        originHeight: 400,
        centerType: 'contain'
      })
      it('should have width as 50', function () {
        expect(centerIt.width()).to.equal(50)
      })
      it('should have height as 100', function () {
        expect(centerIt.height()).to.equal(100)
      })
      it('should have ratio as 0.25', function () {
        expect(centerIt.ratio()).to.equal(0.25)
      })
      it('should have offset (top: 0, left: 25)', function () {
        expect(centerIt.offset().top).to.equal(0)
        expect(centerIt.offset().left).to.equal(25)
      })
    })
  })
})
