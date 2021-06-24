const assert = require('chai').assert
import * as util from '../lib/utils'
import _ from 'lodash'

describe('generic utility functions', function() {
  it('should jitter an integer', function() {
    assert.equal(util.jitter(100,0), 100, 'jittering by 0 returns base')
    assert.closeTo(util.jitter(100,10), 100, 10, 'jittering 100 by 10 is close to 100')
    assert.closeTo(util.jitter50(100), 100, 50, 'jitter50 is 50 within 100')
  })
  it('should deep copy an opject', function() {
    const obj = {a: 1, b: ["a"]}
    assert.deepEqual(util.deepCopy(obj), obj, 'deep copied object should be equal')
    assert.notEqual(util.deepCopy(obj), obj, 'deep copied objects not the same')
  })
})
