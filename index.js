const chai = require('chai');

const { expect } = chai;

// Use chai custom assetion library
chai.use(require('chai-json-schema'));
chai.use(require('chai-string'));

/**
 * This wrapper take methods from default assert library to give access to use it from I object.
 * This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and
 * other assertion libraries.
 */
class chaiWrapper extends Helper {
  /**
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @returns {*}
   */
  assertEqual(actualValue, expectedValue) {
    return expect(actualValue).to.equal(expectedValue);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_equal
   * @param {*} actualValue
   * @param {*} expectedValue
   * @returns {*}
   */
  assertNotEqual(actualValue, expectedValue) {
    return expect(actualValue).not.to.equal(expectedValue);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToContain
   * @returns {*}
   */
  assertContain(actualValue, expectedValueToContain) {
    return expect(actualValue).to.contain(expectedValueToContain);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.chaijs.com/api/bdd/#method_include
   * @param {*} actualValue
   * @param {*} expectedValueToNotContain
   * @returns {*}
   */
  assertNotContain(actualValue, expectedValueToNotContain) {
    return expect(actualValue).not.to.contain(expectedValueToNotContain);
  }

  /**
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToStartWith
   * @returns {*}
   */
  assertStartsWith(actualValue, expectedValueToStartWith) {
    return expect(actualValue).to.startsWith(expectedValueToStartWith);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_not
   * https://www.npmjs.com/package/chai-string#startswithstartwith
   * @param {*} actualValue
   * @param {*} expectedValueToNotStartWith
   * @returns {*}
   */
  assertNotStartsWith(actualValue, expectedValueToNotStartWith) {
    return expect(actualValue).not.to.startsWith(expectedValueToNotStartWith);
  }

  /**
   * https://www.npmjs.com/package/chai-json-schema#jsonschemavalue-schema
   * @param {*} targetData
   * @param {*} jsonSchema
   * @returns {*}
   */
  assertJsonSchema(targetData, jsonSchema) {
    return expect(targetData).to.be.jsonSchema(jsonSchema);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_property
   * @param {*} targetData
   * @param {*} propertyName
   * @returns {*}
   */
  assertHasProperty(targetData, propertyName) {
    return expect(targetData).to.have.property(propertyName);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} propertyName
   * @returns {*}
   */
  assertHasAProperty(targetData, propertyName) {
    return expect(targetData).to.have.a.property(propertyName);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @returns {*}
   */
  assertToBeA(targetData, type) {
    return expect(targetData).to.be.a(type);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_a
   * @param {*} targetData
   * @param {*} type
   * @returns {*}
   */
  assertToBeAn(targetData, type) {
    return expect(targetData).to.be.an(type);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_match
   * @param {*} targetData
   * @param {*} regex
   * @returns {*}
   */
  assertMatchRegex(targetData, regex) {
    return expect(targetData).to.match(regex);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_lengthof
   * @param {*} targetData
   * @param {*} length
   * @returns {*}
   */
  assertLengthOf(targetData, length) {
    return expect(targetData).to.have.lengthOf(length);
  }

  /**
   * https://www.chaijs.com/api/bdd/#method_empty
   * @param {*} targetData
   * @returns {*}
   */
  assertEmpty(targetData) {
    return expect(targetData).to.be.empty;
  }

}

module.exports = chaiWrapper;
