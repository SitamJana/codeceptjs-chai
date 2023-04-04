/* eslint-disable global-require */
const chai = require( 'chai' );

const { expect } = chai;

// Use chai custom assertion library
chai.use( require( 'chai-string' ) );
chai.use( require( 'chai-exclude' ) );
chai.use( require( 'chai-match-pattern' ) );

/**
 * This wrapper take methods from default assert library to give access to use it from I object.
 * This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and
 * other assertion libraries.
 */
class chaiWrapper {

  /**
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEqual( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.equal( expectedValue );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotEqual( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).not.to.equal( expectedValue );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertDeepEqual( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.deep.equal( expectedValue );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotDeepEqual( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.not.deep.equal( expectedValue );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToContain
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertContain( actualValue, expectedValueToContain, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.contain(
      expectedValueToContain
    );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToNotContain
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotContain(
    actualValue,
    expectedValueToNotContain,
    customErrorMsg = ''
  ){

    return expect( actualValue, customErrorMsg ).not.to.contain(
      expectedValueToNotContain
    );
  
  }

  /**
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToStartWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertStartsWith( actualValue, expectedValueToStartWith, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.startsWith(
      expectedValueToStartWith
    );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToNotStartWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotStartsWith(
    actualValue,
    expectedValueToNotStartWith,
    customErrorMsg = ''
  ){

    return expect( actualValue, customErrorMsg ).not.to.startsWith(
      expectedValueToNotStartWith
    );
  
  }

  /**
   * https://www.npmjs.com/package/chai-string#endswithendwith
   * @param {*} actualValue
   * @param {*} expectedValueToEndWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEndsWith( actualValue, expectedValueToEndWith, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.endsWith(
      expectedValueToEndWith
    );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.npmjs.com/package/chai-string#endswithendwith
   * @param {*} actualValue
   * @param {*} expectedValueToNotEndWith
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertNotEndsWith(
    actualValue,
    expectedValueToNotEndWith,
    customErrorMsg = ''
  ){

    return expect( actualValue, customErrorMsg ).not.to.endsWith(
      expectedValueToNotEndWith
    );
  
  }

  /**
   * https://www.npmjs.com/package/chai-json-schema#jsonschemavalue-schema
   * @param {*} targetData
   * @param {*} jsonSchema
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertJsonSchema( targetData, jsonSchema, customErrorMsg = '' ){

    chai.use( require( 'chai-json-schema' ) );
    return expect( targetData, customErrorMsg ).to.be.jsonSchema( jsonSchema );
  
  }

  /**
   * https://www.chaijs.com/plugins/chai-json-schema-ajv/
   * @param {*} targetData
   * @param {*} jsonSchema
   * @param {*} customErrorMsg
   * @param {*} ajvOptions Pass AJV options
   * @returns {*}
   */
  assertJsonSchemaUsingAJV(
    targetData,
    jsonSchema,
    customErrorMsg = '',
    ajvOptions = { allErrors: true }
  ){

    chai.use( require( 'chai-json-schema-ajv' ).create( ajvOptions ) );
    return expect( targetData, customErrorMsg ).to.be.jsonSchema( jsonSchema );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_property
   * @param {*} targetData
   * @param {*} propertyName
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertHasProperty( targetData, propertyName, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.have.property( propertyName );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} propertyName
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertHasAProperty( targetData, propertyName, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.have.a.property( propertyName );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertToBeA( targetData, type, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.a( type );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertToBeAn( targetData, type, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.an( type );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_match
   * @param {*} targetData
   * @param {*} regex
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertMatchRegex( targetData, regex, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.match( regex );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * @param {*} targetData
   * @param {*} length
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthOf( targetData, length, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.have.lengthOf( length );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_empty
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertEmpty( targetData, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.empty;
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_true
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertTrue( targetData, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.true;
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_false
   * @param {*} targetData
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertFalse( targetData, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.false;
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_above
   * @param {*} targetData
   * @param {*} aboveThan number | Date
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertAbove( targetData, aboveThan, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.above( aboveThan );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_below
   * @param {*} targetData
   * @param {*} belowThan number | Date
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertBelow( targetData, belowThan, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.be.below( belowThan );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * https://www.chaijs.com/api/bdd/#method_above
   * @param {*} targetData
   * @param {*} lengthAboveThan
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthAboveThan( targetData, lengthAboveThan, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.have.lengthOf.above(
      lengthAboveThan
    );
  
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * https://www.chaijs.com/api/bdd/#method_below
   * @param {*} targetData
   * @param {*} lengthBelowThan
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertLengthBelowThan( targetData, lengthBelowThan, customErrorMsg = '' ){

    return expect( targetData, customErrorMsg ).to.have.lengthOf.below(
      lengthBelowThan
    );
  
  }

  /**
   * https://www.npmjs.com/package/chai-string#equalignorecase
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertEqualIgnoreCase( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.equalIgnoreCase(
      expectedValue
    );
  
  }

  /**
   * Asserts members of two arrays are deeply equal
   * https://www.chaijs.com/api/bdd/#method_deep
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertDeepMembers( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.have.deep.members(
      expectedValue
    );
  
  }

  /**
   * Asserts an array deep includes members from another array
   * https://www.chaijs.com/api/bdd/#method_deep
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} customErrorMsg
   * @returns
   */
  assertDeepIncludeMembers( actualValue, expectedValue, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.deep.include.members(
      expectedValue
    );
  
  }

  /**
   * Asserts members of two JSON objects are deeply equal excluding some properties
   * https://www.chaijs.com/api/bdd/#method_deep
   * https://www.chaijs.com/plugins/chai-exclude/
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @param {*} fieldsToExclude
   * @param {*} customErrorMsg
   * @returns {*}
   */
  assertDeepEqualExcluding(
    actualValue,
    expectedValue,
    fieldsToExclude,
    customErrorMsg = ''
  ){

    return expect( actualValue, customErrorMsg )
      .excludingEvery( fieldsToExclude )
      .to.deep.equal( expectedValue );
  
  }

  /**
   * Asserts a JSON object matches a provided pattern
   * https://www.chaijs.com/plugins/chai-match-pattern/
   * @param {*} actualValue
   * @param {*} expectedPattern
   * @param {*} customErrorMsg
   * @returns
   */
  assertMatchesPattern( actualValue, expectedPattern, customErrorMsg = '' ){

    return expect( actualValue, customErrorMsg ).to.matchPattern( expectedPattern );
  
  }

}

module.exports = chaiWrapper;
