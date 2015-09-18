const test = require('tape')
const polyrepo = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(polyrepo)
})
