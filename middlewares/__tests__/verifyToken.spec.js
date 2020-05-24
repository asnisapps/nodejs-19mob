const verifyToken = require('../verifyToken');
const createToken = require('../../utils/createToken');

//TOKEN DECODED
const mockId = "abc123"
const mockValidToken = createToken({ id: mockId })
const headerValid = { "x-access-token": mockValidToken }
const reqValidToken = {};
reqValidToken.headers = headerValid

//500
const mockInvalidToken = "tokenInvalido123"
const headerInvalid = { "x-access-token": mockInvalidToken }
const reqInvalidToken = {};
reqInvalidToken.headers = headerInvalid

var res = {
    status() {},
    send() {}
  };

const next = () => {};

describe('verifyToken', () => {

    //401
    // it('should return Not authorized', () => {
    //     expect(verifyToken(nul)).toEqual(401);
    // });

    //500
    it('should return error', () => {
        expect(verifyToken(reqInvalidToken,res,next).status).toEqual(500);
    });

    //TOKEN DECODED
    // it('should return Token Decoded', () => {
    //     expect(verifyToken(reqValidToken)).toEqual();
    // });

});