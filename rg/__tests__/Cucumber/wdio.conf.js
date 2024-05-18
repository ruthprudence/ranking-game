exports.config = {
    runner: 'local',
    specs: [
        './features/*.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost', // replace with your site's URL
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./step_definitions/*.js'], // import step definitions
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
        tags: 'not @Pending',
    },
};