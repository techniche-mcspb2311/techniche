// import { MongoClient, ServerApiVersion } from 'mongodb';

// let conn;

// export const conn = new Promise((resolve, reject) => {
//     try {
//         console.log('MONGODB_URI', process.env.MONGODB_URI);
//         const client = new MongoClient(process.env.MONGODB_URI, {
//             serverApi: ServerApiVersion.v1
//         });

//         resolve(client);
//     } catch(e) {
//         console.error('Couldn\'t connect to Mongo with URI', process.env.MONGODB_URI, e);
//         reject(e);
//     }
// }).then(async client => {
//     await client.connect();
//     return client;
// });

// export const db = conn.then(async client => {
//     const db = client.db(process.env.DB);

//     await seed(db);

//     return db;
// });

let appliedSeed = false;

async function seed(db) {
    if (!appliedSeed) {
        const users = db.collection('users');
        let adminExists;
        if (process.env.ADMIN_EMAIL) {
            console.log('admin email', process.env.ADMIN_EMAIL);
            adminExists = await users.findOne({ email: process.env.ADMIN_EMAIL });
            if (!adminExists) {
                adminExists = {};
                const inserted = await users.insertOne({
                    email: process.env.ADMIN_EMAIL,
                    isAdmin: true
                });
                adminExists._id = inserted.insertedId;
                console.log('inserted email account');
            } else if (!adminExists.isAdmin) {
                await users.updateOne({
                    email: process.env.ADMIN_EMAIL
                }, {
                    "$set": { isAdmin: true }
                });
                console.log('updated email account');
            }
        }
        const challenges = db.collection('challenges');
        await challenges.deleteMany({});
        const challengeId = await challenges.insertOne({
            passcode: '1234',
            recruiterId: adminExists._id
        });
        console.log("Here's the initial challenge id:", challengeId);
        appliedSeed = true;
    }
}

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log(uri);
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export const conn = clientPromise;

async function applySeed() {
    const client = await clientPromise;
    const db = client.db(process.env.DB);
    await seed(db);
}

applySeed();

/** Get the singleton MongoDB connection */
export async function getDb() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DB);
        return db;
    } catch(e) {
        console.error('Couldn\'t get Mongo Database', e);
    }
};
