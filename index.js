const chai   = require( 'chai' );

/**
 * This wrapper take methods from default assert library to give access to use it from I object.
 * This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and
 * other assertion libraries.
 */
class chaiWrapper extends Helper {
  /**
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actual
   * @param {*} expected
   * @returns {*}
   */
  assertEqual(actual, expected) {
    return expect( actual ).to.equal( expected );
  }

}

module.exports = chaiWrapper;
