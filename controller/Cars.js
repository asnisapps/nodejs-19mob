const CarsModel = require('../model/Cars');
const carsModel = new CarsModel();
const cryptoPassword = require('../utils/cryptoPassword');

class Cars {
    get(req,res) {
        const { id } = req.params;

        carsModel.get(id)
            .then((car) => {
                //console.log(user);
                if (!car.exists) {
                    res.status(404).send({message:'Car not found'});
                }

                res.json(car.data());
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
        }

        carsModel.create(data)

            .then(car => {
                console.log(`Adicionado usuario com ID: ${car.id}`);
                //res.status(200).send({message:`Adicionado carro com ID: ${car.id}`});
                delete data.password;

                res.status(201).json({
                    ...data,
                    id: car.id,
                });

              })

            .catch((error) => {
                res.status(500).send(error);
            });  
    }

    delete(req,res){
        const { id } = req.params;
        carsModel.delete(id);
        res.send("Carro de id " + id + " removido com sucesso!");
    }

}

module.exports = Cars;