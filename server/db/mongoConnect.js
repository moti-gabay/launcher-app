import dotenv from  "dotenv"
dotenv.config()
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGO_URI || "mongodb://mordehai_db:moti123@ac-zrtdcnz-shard-00-00.okjjjrh.mongodb.net:27017,ac-zrtdcnz-shard-00-01.okjjjrh.mongodb.net:27017,ac-zrtdcnz-shard-00-02.okjjjrh.mongodb.net:27017/?ssl=true&replicaSet=atlas-12dhaj-shard-0&authSource=admin&appName=Cluster0";

export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);
