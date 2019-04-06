module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  moduleNameMapper: {
    "\\@demos/(.*)": "<rootDir>/demos/$1/src",
    "\\@pyjamas/(.*)": "<rootDir>/packages/$1/src"
  }
}
