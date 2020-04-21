const { I } = inject();

Feature( 'JSON Schema Validation tests using chai-json-schema' );

Scenario( 'Successful JSON Schema Validation', async()=>{

  const response = await I.sendGetRequest( '/api/users' );

  const jsonSchema = require( './users.schema.json' );

  I.assertJsonSchema( response.data, jsonSchema );

} );

Scenario( 'Failed JSON Schema Validation', async()=>{

  const response = await I.sendGetRequest( '/api/users' );

  const jsonSchema = require( './wrong.schema.json' );

  I.assertJsonSchema( response.data, jsonSchema );

} );
