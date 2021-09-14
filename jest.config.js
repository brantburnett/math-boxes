require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  rootDir: './src',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};
