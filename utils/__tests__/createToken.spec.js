const createToken = require('../createToken');

describe('createToken', () => {
it('should return token with default expires', () => {
expect(createToken({ id: 1})).not.toBeNull();
});

it('should return token with param expires', () => {
expect(createToken({ id: 1}, '24h')).not.toBeNull();
});
});