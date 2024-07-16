exports.config = {
    runner: 'local',
    specs: [
        './features/**/*.feature' // Ensure this path is correct
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--disable-infobars', '--window-size=1280,800']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./step_definitions/*.js'], // Ensure this path is correct
        backtrace: true,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'], // This should be an array with strings
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
};
  