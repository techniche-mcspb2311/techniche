import { MongoClient, ServerApiVersion } from 'mongodb';

const conn = new Promise((resolve, reject) => {
    try {
        console.log('MONGODB_URI', process.env.MONGODB_URI);
        const client = new MongoClient(process.env.MONGODB_URI, {
            serverApi: ServerApiVersion.v1
        });

        resolve(client);
    } catch(e) {
        console.error('Couldn\'t connect to Mongo with URI', process.env.MONGODB_URI, e);
        reject(e);
    }
});

/** Get the singleton MongoDB connection */
export default async function getDb() {
    try {
        const client = await conn;
        await client.connect();
        return client.db(process.env.DB);
    } catch(e) {
        console.error('Couldn\'t get Mongo Database', e);
    }
}
