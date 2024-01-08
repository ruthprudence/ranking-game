import '@testing-library/jest-dom';

module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js'
    },
  };
  


  