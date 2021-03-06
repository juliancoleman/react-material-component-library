module.exports = {
  collectCoverageFrom: [
    "src/**/!(index).(js|ts)?(x)",
    "helpers/**/!(index).(js|ts)?(x)"
  ],
  coverageDirectory: "coverage",
  testMatch: [
    "<rootDir>/src/**/?(*.)(spec|test).(js|ts)?(x)",
    "<rootDir>/helpers/**/?(*.)(spec|test).(js|ts)?(x)",
  ],
  reporters: process.env.CI ? undefined : ["jest-spec-reporter"],
  setupTestFrameworkScriptFile: "",
  rootDir: ".",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      skipBabel: true
    }
  },
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js"
};
