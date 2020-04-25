const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
const cryptoPassword = require('../utils/cryptoPassword');

class Users {
    get(req,res) {
        const { id } = req.params;

        usersModel.get(id)
            .then((user) => {
                //console.log(user);
                if (!user.exists) {
                    res.status(404).send({message:'User not found'});
                }

                res.json(user.data());
            })
            .catch((error) => {
                res.status(500).send(error);
                //console.error(error);
            });            

        //res.send(`Eu recebi o parametro ${req.params.id}`);
    }

    create(req,res){
        const data = {
            ...req.body,
            password: cryptoPassword(req.body.password),
        }

        usersModel.create(data)

            .then(user => {
                // console.log(`Adicionado usuario com ID: ${user.id}`);
                // res.status(200).send({message:`Adicionado usuario com ID: ${user.id}`});
                delete data.password;

                res.status(201).json({
                    ...data,
                    id: user.id,
                });

              })

            .catch((error) => {
                res.status(500).send(error);
            });  
    }

    delete(req,res){
        const { id } = req.params;
        usersModel.delete(id);
        res.send("Usuário de id " + id + " removido com sucesso!");
    }

}

module.exports = Users;