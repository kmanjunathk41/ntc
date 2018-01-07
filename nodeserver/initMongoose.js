let this_mongoose;

export function initMongoose(mongoose) {
    this_mongoose = mongoose;
}

export function getMongoose(){
    return this_mongoose;
}