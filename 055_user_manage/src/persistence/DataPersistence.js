import {appDB} from './FirebaseConnect' ;

class DataPersistence {
    constructor() {        
    }

    getAllData = () => {
        appDB.once('value').then((data) => {
            console.log(data.val());
        })
    }
}


var dataPersistence = new DataPersistence();

export default dataPersistence;