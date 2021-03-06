var mongoose = require("mongoose");
import {initMongoose} from "./initMongoose"

export function connectMongoose() {
    var options = {
        useMongoClient: true,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        // bufferMaxEntries: 0
    };
    mongoose.connect('mongodb://AdminManju:Mongo!123!@localhost:27017/admin',options).then(
        () => {
            initMongoose(mongoose);
            console.log("mongo connected");
        },
        err => {
            console.log("mongo connection failed");
        }
    );

}

