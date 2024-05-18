exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
      './rg/__tests__/Cucumber/features/*.feature'
    ],
    cucumberOpts: {
      require: [
        './rg/__tests__/Cucumber/step_definitions/*.js',
        './rg/__tests__/Cucumber/features/support/*.js'
      ],
      format: 'pretty'
    },
    capabilities: {
      browserName: 'chrome'
    },
    directConnect: true
  };
  