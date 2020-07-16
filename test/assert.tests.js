const { I } = inject();

Feature( 'Assert Validation tests @assert' );

Scenario( 'Validate I.assertTrue without custom error message', async()=>{

  const arr = ['abc', 'bcd', 'cde'];

  I.assertEmpty( arr );

} );

Scenario( 'Validate I.assertTrue with custom error message', async()=>{

  const arr = ['abc', 'bcd', 'cde'];

  I.assertEmpty( arr, 'Array is not empty' );

} );
