exports.config = {
    runner: 'local',
    specs: [
      './rg/__tests__/Cucumber/features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
      require: [
        './rg/__tests__/Cucumber/step_definitions/**/*.js'
      ],
      backtrace: false,
      requireModule: [],
      dryRun: false,
      failFast: false,
      format: ['pretty'],
      colors: true,
      snippets: true,
      source: true,
      profile: [],
      strict: false,
      tagExpression: '',
      timeout: 60000,
      ignoreUndefinedDefinitions: false
    }
  };
  