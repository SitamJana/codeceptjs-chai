# codeceptjs-chai

[![npm package](https://nodei.co/npm/codeceptjs-chai.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/codeceptjs-chai)

codeceptjs-chai is [CodeceptJS](https://codecept.io/) helper which wraps [chai](https://www.chaijs.com/) library to complete chai assertion steps with CodeceptJS logging.
This wrapper allow us to print asserts as steps in output. Also we can expand this lib with different methods and other assertion libraries.

NPM package: https://www.npmjs.com/package/codeceptjs-chai

### Configuration

This helper should be added in codecept.json/codecept.conf.js

Example:

```json
{
    "helpers": {
        "ChaiWrapper": {
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
I.assertEqual("foo", "foo");
I.assertEqual("foo", "foo", "Both the values are not equal");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertNotEqual

Asserts that the target is not equal to the given value.

-   https://www.chaijs.com/api/bdd/#method_not
-   https://www.chaijs.com/api/bdd/#method_equal

```js
I.assertNotEqual(2, 1);
I.assertNotEqual("foobar", "foo");
I.assertNotEqual("foobar", "foo", "Both the values are equal");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertDeepEqual

Asserts that the target is an object whose properties are strictly equal (===) as the given value's.

-   https://www.chaijs.com/api/bdd/#method_deep
-   https://www.chaijs.com/api/bdd/#method_equal

```js
I.assertDeepEqual({ a: 1 }, { a: 1 });
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertNotDeepEqual

Asserts that the target is not an object whose properties are strictly equal (===) as the given value's.

-   https://www.chaijs.com/api/bdd/#method_not
-   https://www.chaijs.com/api/bdd/#method_deep
-   https://www.chaijs.com/api/bdd/#method_equal

```js
I.assertNotDeepEqual({ a: 1 }, { a: 2 });
I.assertNotDeepEqual({ a: 1 }, { b: 1, c: 2 });
I.assertNotDeepEqual(
    { a: 1 },
    { b: 1, c: 2 },
    "Both the values are deeply equal"
);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertContain

Asserts that the target contains the given value.

https://www.chaijs.com/api/bdd/#method_include

```js
I.assertContain("foobar", "foo");
I.assertContain([1, 2, 3], 2);
I.assertContain({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 });
I.assertContain(new Set([1, 2]), 2);
I.assertContain(
    new Map([
        ["a", 1],
        ["b", 2],
    ]),
    2
);
I.assertContain("foobar", "foo", "Target value does not contain given value");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToContain` - expected value to contain
-   `customErrorMsg` - Custom error message

## assertNotContain

Asserts that the target does not contain the given value.

-   https://www.chaijs.com/api/bdd/#method_not
-   https://www.chaijs.com/api/bdd/#method_include

```js
I.assertNotContain("foo", "bar");
I.assertNotContain([1, 2, 3], 4);
I.assertNotContain({ a: 3, b: 4 }, { a: 1, b: 2 });
I.assertNotContain("foo", "bar", "Target value contains given value");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToNotContain` - expected value to not contain
-   `customErrorMsg` - Custom error message

## assertStartsWith

Asserts that the target starts with the given value.

https://www.npmjs.com/package/chai-string#startswithstartwith

```js
I.assertStartsWith("foobar", "foo");
I.assertStartsWith(
    "foobar",
    "foo",
    "Target value does not start with given value"
);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToStartWith` - expected value to start with
-   `customErrorMsg` - Custom error message

## assertNotStartsWith

Asserts that the target does not start with the given value.

-   https://www.chaijs.com/api/bdd/#method_not
-   https://www.npmjs.com/package/chai-string#startswithstartwith

```js
I.assertNotStartsWith("foobar", "bar");
I.assertNotStartsWith("foobar", "bar", "Target value starts with given value");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToNotStartWith` - expected value to not start with
-   `customErrorMsg` - Custom error message

## assertEndsWith

Asserts that the target ends with the given value.

https://www.npmjs.com/package/chai-string#endswithendwith

```js
I.assertEndsWith("foobar", "bar");
I.assertEndsWith(
    "foobar",
    "bar",
    "Target value does not ends with given value"
);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToEndWith` - expected value to end with
-   `customErrorMsg` - Custom error message

## assertNotEndsWith

Asserts that the target does not end with the given value.

-   https://www.chaijs.com/api/bdd/#method_not
-   https://www.npmjs.com/package/chai-string#endswithendwith

```js
I.assertNotEndsWith("foobar", "bar");
I.assertNotEndsWith("foobar", "bar", "Target value ends with given value");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValueToNotEndWith` - expected value to not end with
-   `customErrorMsg` - Custom error message

## assertJsonSchema

Validate that the given json data conforms to the specified JSON Schema. Both the value and schema would likely be JSON loaded from an external datasource but could also be literals or object instances.

https://www.npmjs.com/package/chai-json-schema#jsonschemavalue-schema

```js
const goodApple = {
    skin: "thin",
    colors: ["red", "green", "yellow"],
    taste: 10,
};
const badApple = {
    colors: ["brown"],
    taste: 0,
    worms: 2,
};
const fruitSchema = {
    title: "fresh fruit schema v1",
    type: "object",
    required: ["skin", "colors", "taste"],
    properties: {
        colors: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
                type: "string",
            },
        },
        skin: {
            type: "string",
        },
        taste: {
            type: "number",
            minimum: 5,
        },
    },
};
I.assertJsonSchema(goodApple, fruitSchema);
I.assertJsonSchema(
    goodApple,
    fruitSchema,
    "Target json data does not conform to json schema"
);
```

**Parameters**

-   `targetData` - target json data
-   `jsonSchema` - json schema
-   `customErrorMsg` - Custom error message

## assertJsonSchemaUsingAJV

Validate that the given json data conforms to the specified JSON Schema using [chai-json-schema-ajv](https://www.npmjs.com/package/chai-json-schema-ajv). Both the value and schema would likely be JSON loaded from an external datasource but could also be literals or object instances.

-   https://www.chaijs.com/plugins/chai-json-schema-ajv/
-   https://www.npmjs.com/package/chai-json-schema-ajv

```js
const goodApple = {
    skin: "thin",
    colors: ["red", "green", "yellow"],
    taste: 10,
};
const badApple = {
    colors: ["brown"],
    taste: 0,
    worms: 2,
};
const fruitSchema = {
    title: "fresh fruit schema v1",
    type: "object",
    required: ["skin", "colors", "taste"],
    properties: {
        colors: {
            type: "array",
            minItems: 1,
            uniqueItems: true,
            items: {
                type: "string",
            },
        },
        skin: {
            type: "string",
        },
        taste: {
            type: "number",
            minimum: 5,
        },
    },
};
I.assertJsonSchemaUsingAJV(goodApple, fruitSchema);
I.assertJsonSchema(
    goodApple,
    fruitSchema,
    "Target json data does not conform to json schema",
    {}
);
I.assertJsonSchema(goodApple, fruitSchema, "", { jsonPointers: true });
```

**Parameters**

-   `targetData` - target json data
-   `jsonSchema` - json schema
-   `customErrorMsg` - Custom error message
-   `ajvOptions` - [Custom AJV Options](https://www.npmjs.com/package/chai-json-schema-ajv#custom-options)

## assertHasProperty

Asserts that the target has a property with the given key.

https://www.chaijs.com/api/bdd/#method_property

```js
I.assertHasProperty({ a: 1 }, "a");
I.assertHasProperty(
    { a: 1 },
    "a",
    "Target data does not have the given property"
);
```

**Parameters**

-   `targetData` - target json data
-   `propertyName` - expected property name
-   `customErrorMsg` - Custom error message

## assertHasAProperty

Asserts that the target has a child property with the given key.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertHasAProperty({ b: 2 }, "b");
I.assertHasAProperty(
    { b: 2 },
    "b",
    "Target data does not have a child property with the given key"
);
```

**Parameters**

-   `targetData` - target json data
-   `propertyName` - expected property name
-   `customErrorMsg` - Custom error message

## assertToBeA

Asserts that the target’s type is equal to the given string type. Types are case insensitive. See the type-detect project page for info on the type detection algorithm: https://github.com/chaijs/type-detect.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertToBeA("foo", "string");
I.assertToBeA(null, "null");
I.assertToBeA(Promise.resolve(), "promise");
I.assertToBeA(new Float32Array(), "float32array");
I.assertToBeA(Symbol(), "symbol");
I.assertToBeA("foo", "string", "Target data does not match the type");
```

**Parameters**

-   `targetData` - target json data
-   `type` - expected data type
-   `customErrorMsg` - Custom error message

## assertToBeAn

Asserts that the target’s type is equal to the given string type. Types are case insensitive. See the type-detect project page for info on the type detection algorithm: https://github.com/chaijs/type-detect.

https://www.chaijs.com/api/bdd/#method_a

```js
I.assertToBeAn([1, 2, 3], "array");
I.assertToBeAn({ a: 1 }, "object");
I.assertToBeAn(undefined, "undefined");
I.assertToBeAn(new Error(), "error");
I.assertToBeAn([1, 2, 3], "array", "Target data does not match the type");
```

**Parameters**

-   `targetData` - target json data
-   `type` - expected data type
-   `customErrorMsg` - Custom error message

## assertMatchRegex

Asserts that the target matches the given regular expression.

https://www.chaijs.com/api/bdd/#method_match

```js
I.assertMatchRegex("foobar", /^foo/);
I.assertMatchRegex(
    "foobar",
    /^foo/,
    "Target data does not match the given regex"
);
```

**Parameters**

-   `targetData` - target json data
-   `regex` - regular expression to match target data
-   `customErrorMsg` - Custom error message

## assertLengthOf

Asserts that the target’s length or size is equal to the given number n.

https://www.chaijs.com/api/bdd/#method_lengthof

```js
I.assertLengthOf([1, 2, 3], 3);
I.assertLengthOf("foo", 3);
I.assertLengthOf(new Set([1, 2, 3]), 3);
I.assertLengthOf(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    3
);
I.assertLengthOf("foo", 3, "Target data does not match the length");
```

**Parameters**

-   `targetData` - target json data
-   `length` - expected target data length
-   `customErrorMsg` - Custom error message

## assertEmpty

When the target is a string or array, .empty asserts that the target’s length property is strictly (===) equal to 0.

https://www.chaijs.com/api/bdd/#method_empty

```js
I.assertEmpty("");
I.assertEmpty([]);
I.assertEmpty({});
I.assertEmpty(new Set());
I.assertEmpty(new Map());
I.assertEmpty("", "Target data is not empty");
```

**Parameters**

-   `targetData` - target json data
-   `customErrorMsg` - Custom error message

## assertTrue

Asserts that the target is strictly (===) equal to true.

https://www.chaijs.com/api/bdd/#method_true

```js
I.assertTrue(true);
I.assertTrue(true, "Target data is not true");
```

**Parameters**

-   `targetData` - target data
-   `customErrorMsg` - Custom error message

## assertFalse

Asserts that the target is strictly (===) equal to false.

https://www.chaijs.com/api/bdd/#method_false

```js
I.assertFalse(false);
I.assertTrue(false, "Target data is not false");
```

**Parameters**

-   `targetData` - target data
-   `customErrorMsg` - Custom error message

## assertAbove

Asserts that the target is a number or a date greater than the given number or date n respectively. However, it’s often best to assert that the target is equal to its expected value.

https://www.chaijs.com/api/bdd/#method_above

```js
I.assertAbove(2, 1);
I.assertAbove(2, 1, "Target data not above the given value");
```

**Parameters**

-   `targetData` - target data
-   `aboveThan` - number | Date
-   `customErrorMsg` - Custom error message

## assertBelow

Asserts that the target is a number or a date less than the given number or date n respectively. However, it’s often best to assert that the target is equal to its expected value.

https://www.chaijs.com/api/bdd/#method_below

```js
I.assertBelow(1, 2);
I.assertAbove(1, 2, "Target data not below the given value");
```

**Parameters**

-   `targetData` - target data
-   `belowThan` - number | Date
-   `customErrorMsg` - Custom error message

## assertLengthOf

Asserts that the target’s length or size is equal to the given number n.

https://www.chaijs.com/api/bdd/#method_lengthof

```js
I.assertLengthOf([1, 2, 3], 3);
I.assertLengthOf("foo", 3);
I.assertLengthOf(new Set([1, 2, 3]), 3);
I.assertLengthOf(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    3
);
I.assertLengthOf(
    "foo",
    3,
    "Target length or size does not match the given number"
);
```

**Parameters**

-   `targetData` - target data
-   `expectedLength` - expected length
-   `customErrorMsg` - Custom error message

## assertLengthAboveThan

Asserts that the target’s length or size is above than the given number n.

https://www.chaijs.com/api/bdd/#method_lengthof
https://www.chaijs.com/api/bdd/#method_above

```js
I.assertLengthAboveThan([1, 2, 3], 2);
I.assertLengthAboveThan("foo", 2);
I.assertLengthAboveThan(new Set([1, 2, 3]), 2);
I.assertLengthAboveThan(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    2
);
I.assertLengthAboveThan(
    "foo",
    2,
    "Target length or size not above than given number"
);
```

**Parameters**

-   `targetData` - target data
-   `lengthAboveThan` - length above than
-   `customErrorMsg` - Custom error message

## assertLengthBelowThan

Asserts that the target’s length or size is below than the given number n.

https://www.chaijs.com/api/bdd/#method_lengthof
https://www.chaijs.com/api/bdd/#method_below

```js
I.assertLengthBelowThan([1, 2, 3], 4);
I.assertLengthBelowThan("foo", 4);
I.assertLengthBelowThan(new Set([1, 2, 3]), 4);
I.assertLengthBelowThan(
    new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]),
    4
);
I.assertLengthAboveThan(
    "foo",
    4,
    "Target length or size not below than given number"
);
```

**Parameters**

-   `targetData` - target data
-   `lengthBelowThan` - length below than
-   `customErrorMsg` - Custom error message

## assertEqualsIgnoreCase

Asserts two strings represent the same value when ignoring case

https://www.chaijs.com/plugins/chai-string/

```js
I.assertEqualIgnoreCase("FOO", "foo");
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertDeepMembers

Asserts members of two arrays are deeply equal

https://www.chaijs.com/api/bdd/#method_deep

```js
I.assertDeepMembers([{ a: 1 }], [{ a: 1 }]);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertDeepIncludeMembers

Asserts an array deep includes members from another array

https://www.chaijs.com/api/bdd/#method_deep

```js
I.assertDeepIncludeMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }]);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `customErrorMsg` - Custom error message

## assertDeepExcludeMembers

Asserts members of two JSON objects are deeply equal excluding some properties

https://www.chaijs.com/plugins/chai-exclude/

```js
I.assertDeepEqualExcluding([{ a: 1 }, { b: 2 }], "b", [{ a: 1 }]);
```

**Parameters**

-   `actualValue` - actual value
-   `expectedValue` - expected value
-   `fieldsToExclude` - Fields to exclude from validation
-   `customErrorMsg` - Custom error message

## assertMatchesPattern

Asserts a JSON object matches a provided pattern

https://www.chaijs.com/plugins/chai-match-pattern/

```js
I.assertMatchesPattern({ a: 1, b: "abc" }, { a: 1, b: _.isString });
```

**Parameters**

-   `actualValue` - actual value
-   `expectedPattern` - pattern to match on
-   `customErrorMsg` - Custom error message
