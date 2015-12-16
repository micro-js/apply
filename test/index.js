/**
 * Imports
 */

var apply = require('..')
var test = require('tape')
var slice = Array.prototype.slice

/**
 * Tests
 */

test('should apply', function (t) {
  t.equal(apply(sum, [1, 2]), 3)
  t.equal(apply(sum, [1, 2, 3, 4, 5, 6]), 21)
  t.equal(apply(sum, [1, 2, 3, 4, 5, 6, 7]), 28)
  t.end()
})


function sum () {
  var nums = slice.call(arguments)
  var total = 0
  for (var i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  return total
}
