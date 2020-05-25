const verifyToken = require('../verifyToken');
const createToken = require('../../utils/createToken');

//500
// const mockInvalidToken = "tokenInvalido123"
// const headerInvalid = { "x-access-token": mockInvalidToken }
// const reqInvalidToken = {};
// reqInvalidToken.headers = headerInvalid

//401
// const headerNull = { "x-access-token": null }
// const reqNullToken = {};
// reqNullToken.headers = headerNull

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};

const mockRes = mockResponse();

const mockNext = jest.fn();

describe('verifyToken', () => {

    //401
    it('should return Not authorized', async () => {

        const mockReqNullToken = {
            headers: {
                "x-access-token": '' //Token Nulo
            }
        };     

        const res = await verifyToken(mockReqNullToken, mockRes, mockNext);
        expect(res.status).toHaveBeenCalledWith(401);       
    });

    //500
    it('should return error', async () => {

        const mockReqInvalidToken = {
            headers: {
                "x-access-token": 'tokenInvalido123' //Token Invalido
            }
        };     

        const res = await verifyToken(mockReqInvalidToken, mockRes, mockNext);
        expect(res).toBe('token_invalid');
    });

    //TOKEN DECODED
    it('should return Token Decoded', async () => {

        //TOKEN DECODED
        const mockId = "abc123"
        const mockValidToken = createToken({ id: mockId })

        const mockReqValidToken = {
            headers: {
                "x-access-token": mockValidToken //Token Valido
            }
        };

        const res = await verifyToken(mockReqValidToken, mockRes, mockNext);
        expect(res).toBe('token_verified');
    });

});