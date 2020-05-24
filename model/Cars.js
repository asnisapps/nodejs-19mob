const BaseModel = require('./BaseModel');

class Cars extends BaseModel {
    constructor(){
        super();
    }

    get(id){
        return this.db
                .collection('cars')
                .doc(id)
                .get();
    }

    getBy(conditions) {
        let db = this.db.collection('cars');

        conditions.forEach(({ field, operator , value }) => 
            db = db.where(field, operator, value)
        );

        return db.get();
    }

    create(car){
        return this.db
            .collection('cars')
            .add(car);
    }

    delete(id){
        return this.db
            .collection('cars')
            .doc(id)
            .delete();
    }

}

module.exports = Cars;