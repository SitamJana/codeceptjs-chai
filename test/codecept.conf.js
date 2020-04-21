exports.config = {
  tests:   './**/*.tests.js',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in',
    },
    ChaiWrapper: {
      require: '../index',
    },
  },
  include:   {},
  bootstrap: null,
  mocha:     {},
  name:      'codeceptjs-chai',
  plugins:   {
    allure: {
      outputDir: 'report',
      enabled:   true,
    }
  }
};
