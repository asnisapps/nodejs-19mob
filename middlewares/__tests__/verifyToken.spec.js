const createToken = require('../createToken');

const mockId = "abc123"
const mockValidToken = createToken({ id: mockId })
const mockInvalidToken = "tokenInvalido123"

