module.exports = {
  preset: "ts-jest",
  testRunner: "jest-circus/runner",
  moduleNameMapper: {
    "\\@pyjamas/(.*)": "<rootDir>/packages/$1/src"
  }
}
