import mongoose from "mongoose";

mongoose.connect(`mongodb://marcio:gabriel963
@ac-ecquiny-shard-00-00.oiupuer.mongodb.net:27017,ac-ecquiny-shard-00-01.oiupuer.mongodb.net:27017,
ac-ecquiny-shard-00-02.oiupuer.mongodb.net:27017/alura-node?ssl=true&replicaSet=atlas-2ve559-shard-0&authSource=admin&retryWrites=true&w=majority`);
let db = mongoose.connection;
export default db;