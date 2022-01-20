module.exports = {
  displayName: 'adopt-a-pup',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '\\html$': '<rootDir>/src/html-mock.ts',
  },
  coverageDirectory: '../../coverage/apps/adopt-a-pup',
};
