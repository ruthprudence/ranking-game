module.exports = {
    testMatch: ["**/?(*.)+(puppeteer).[jt]s?(x)"],
    testEnvironment: "node",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
    },
};