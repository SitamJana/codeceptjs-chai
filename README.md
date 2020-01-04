# codeceptjs-chai

codeceptjs-chai is [CodeceptJS](https://codecept.io/) helper which wraps [chai](https://www.chaijs.com/) library to complete chai assertion steps with CodeceptJS logging.
This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and other assertion libraries.

NPM package: https://www.npmjs.com/package/codeceptjs-chai

### Configuration

This helper should be added in codecept.json/codecept.conf.js

Example:

```json
{
   "helpers": {
     "ChaiWrapper" : {
       "require": "codeceptjs-chai"
     }
   }
}
```

## assertEqual

Asserts that the target is strictly (===) equal to the given value.

https://www.chaijs.com/api/bdd/#method_equal

```js
I.assertEqual(1, 1);
I.assertEqual('foo', 'foo');
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value

## assertNotEqual

Asserts that the target is not equal to the given value.

- https://www.chaijs.com/api/bdd/#method_not
- https://www.chaijs.com/api/bdd/#method_equal

```js
I.assertNotEqual(2, 1);
I.assertNotEqual('foobar', 'foo');
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value

## assertContain

Asserts that the target contains the given value.

https://www.chaijs.com/api/bdd/#method_include

```js
I.assertContain('foobar', 'foo');
I.assertContain([1, 2, 3], 2);
I.assertContain({a: 1, b: 2, c: 3}, {a: 1, b: 2});
I.assertContain(new Set([1, 2]), 2);
I.assertContain(new Map([['a', 1], ['b', 2]]), 2);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToContain` - expected value to contain

## assertNotContain

Asserts that the target does not contain the given value.

- https://www.chaijs.com/api/bdd/#method_not
- https://www.chaijs.com/api/bdd/#method_include

```js
I.assertNotContain('foo', 'bar');
I.assertNotContain([1, 2, 3], 4);
I.assertNotContain({a: 3, b: 4}, {a: 1, b: 2});
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToNotContain` - expected value to not contain

## assertStartsWith

Asserts that the target starts with the given value.

https://www.npmjs.com/package/chai-string#startswithstartwith

```js
I.assertStartsWith('foobar', 'foo');
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToStartWith` - expected value to start with

## assertNotStartsWith

Asserts that the target does not start with the given value.

- https://www.chaijs.com/api/bdd/#method_not
- https://www.npmjs.com/package/chai-string#startswithstartwith

```js
I.assertNotStartsWith('foobar', 'bar');
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToNotStartWith` - expected value to not start with

## assertJsonSchema

Validate that the given javascript value conforms to the specified JSON Schema. Both the value and schema would likely be JSON loaded from an external datasource but could also be literals or object instances.

https://www.npmjs.com/package/chai-json-schema#jsonschemavalue-schema

```js
const goodApple = {
  skin: 'thin',
  colors: ['red', 'green', 'yellow'],
  taste: 10
};
const badApple = {
  colors: ['brown'],
  taste: 0,
  worms: 2
};
const fruitSchema = {
  title: 'fresh fruit schema v1',
  type: 'object',
  required: ['skin', 'colors', 'taste'],
  properties: {
    colors: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      items: {
        type: 'string'
      }
    },
    skin: {
      type: 'string'
    },
    taste: {
      type: 'number',
      minimum: 5
    }
  }
};
I.assertJsonSchema(goodApple, fruitSchema);
```

**Parameters**

-   `targetData` - target json data
-   `jsonSchema` - json schema

## assertHasProperty

Asserts that the target has a property with the given key.

https://www.chaijs.com/api/bdd/#method_property

```js
I.assertHasProperty({a: 1}, 'a');
```

**Parameters**

-   `targetData` - target json data
-   `propertyName` - expected property name

## assertHasAProperty

Asserts that the target has a child property with the given key.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertHasAProperty({b: 2}, 'b');
```

**Parameters**

-   `targetData` - target json data
-   `propertyName` - expected property name

## assertToBeA

Asserts that the target’s type is equal to the given string type. Types are case insensitive. See the type-detect project page for info on the type detection algorithm: https://github.com/chaijs/type-detect.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertToBeA('foo', 'string');
I.assertToBeA(null, 'null');
I.assertToBeA(Promise.resolve(), 'promise');
I.assertToBeA(new Float32Array, 'float32array');
I.assertToBeA(Symbol(), 'symbol');
```

**Parameters**

-   `targetData` - target json data
-   `type` - expected data type

## assertToBeAn

Asserts that the target’s type is equal to the given string type. Types are case insensitive. See the type-detect project page for info on the type detection algorithm: https://github.com/chaijs/type-detect.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertToBeAn([1, 2, 3], 'array');
I.assertToBeAn({a: 1}, 'object');
I.assertToBeAn(undefined, 'undefined');
I.assertToBeAn(new Error, 'error');
```

**Parameters**

-   `targetData` - target json data
-   `type` - expected data type

## assertMatchRegex

Asserts that the target matches the given regular expression.

https://www.chaijs.com/api/bdd/#method_match

```js
I.assertMatchRegex('foobar', /^foo/);
```

**Parameters**

-   `targetData` - target json data
-   `regex` - regular expression to match target data

## assertLengthOf

Asserts that the target’s length or size is equal to the given number n.

https://www.chaijs.com/api/bdd/#method_lengthof

```js
I.assertLengthOf([1, 2, 3], 3);
I.assertLengthOf('foo', 3);
I.assertLengthOf(new Set([1, 2, 3]), 3);
I.assertLengthOf(new Map([['a', 1], ['b', 2], ['c', 3]]), 3);
```

**Parameters**

-   `targetData` - target json data
-   `length` - expected target data length

## assertEmpty

When the target is a string or array, .empty asserts that the target’s length property is strictly (===) equal to 0.

https://www.chaijs.com/api/bdd/#method_empty

```js
I.assertEmpty('');
I.assertEmpty([]);
I.assertEmpty({});
I.assertEmpty(new Set());
I.assertEmpty(new Map());
```

**Parameters**

-   `targetData` - target json data
