module.exports = {
    ...require('./jest.common'),
    displayName: 'server',
    testEnvironment: 'jest-environment-node',
    testMatch: ['**/__tests_server__/**/*.js'],
}