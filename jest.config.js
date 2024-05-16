// ts-jest 
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['__tests__', 'src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',    
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageReporters: ['html', 'text-summary'] 
};
