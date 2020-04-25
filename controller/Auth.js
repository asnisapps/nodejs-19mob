const createToken = require('../utils/createToken');
const cryptoPassword = require('../utils/cryptoPassword');

const UsersModel = require('../model/Users');
const usersModel = new UsersModel();

class Auth {
    validate(req,res) {
        const { email, password } = req.body;

        const conditions = [
            { field: 'email', operator: '==', value: email },
            { field: 'password', operator: '==', value: cryptoPassword(password) }
        ];

        usersModel.getBy(conditions)
            .then(users => {
                if(users.docs.length === 0) {
                    return response
                        .status(401)
                        .send({ 
                            code: 'not_found',
                            message: 'User not found'
                        });
                }

                res.send({ token: createToken({ id: users.docs[0].id })});

                // console.log(users.docs[0].id)
                // console.log(createToken({ id: users.docs[0].id }))
                // console.log({ token: createToken({ id: users.docs[0].id })})
                

            })
            .catch((error) => {
                res.status(500).send(error);
            });  


        // usersModel.getBy(email,password)
        //     .then((qres) => {
        //         if (!qres.docs.length > 0) {
        //              res.status(404).send({message:'User not found'});
        //         } else {
        //             res.status(200).send({message:'User found'});
        //         }

        //     })
          

    }
}

module.exports = Auth;