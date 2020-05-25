const jwt = require('jsonwebtoken');
const { secret } = require('../config/default');

var invalidTokenError = false;

const verifyToken = (req,res,next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res
            .status(401)
            .send({
                code: 'not_authorized',
                message: 'Not authorized'
            });
    }

    jwt.verify(token, secret, (error,decode) => {
        console.log(error);

        if (error) {

            invalidTokenError = true;

            return res
                .status(500)
                .send({error});
        }

        console.log('TOKEN DECODED: ', decode);

        next();       

    });

    if (!invalidTokenError){
        return('token_verified');
    } else {
        invalidTokenError = false;  
        return('token_invalid');        
    }    
}

module.exports = verifyToken;
