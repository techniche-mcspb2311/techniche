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


async function seed(db) {
    const users = db.collection('users');
    let adminExists;

    const notifications = db.collection('notifications');
    const notificationsData = [
        { contents: "Profile updated", isNew: false, date: "2023-01-15", time: "09:30:00" },
        { contents: "New candidate in, John Geraldine Fromalius Edmund Carter is in the chatroom", isNew: false, date: "2023-02-05", time: "14:45:00" },
        { contents: "Profile updated", isNew: false, date: "2023-03-20", time: "11:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-04-10", time: "18:00:00" },
        { contents: "Profile updated", isNew: false, date: "2023-05-02", time: "08:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-06-17", time: "16:20:00" },
        { contents: "Profile updated", isNew: false, date: "2023-07-08", time: "12:10:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-08-22", time: "10:05:00" },
        { contents: "Profile updated", isNew: false, date: "2023-09-14", time: "15:30:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-10-30", time: "17:40:00" },
        { contents: "Profile updated", isNew: false, date: "2023-11-25", time: "13:55:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2023-12-11", time: "09:15:00" },
        { contents: "Profile updated", isNew: false, date: "2024-01-07", time: "14:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-02-18", time: "11:25:00" },
        { contents: "Profile updated", isNew: false, date: "2024-03-05", time: "08:45:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-04-19", time: "16:50:00" },
        { contents: "Profile updated", isNew: false, date: "2024-05-30", time: "13:20:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-06-08", time: "10:35:00" },
        { contents: "Profile updated", isNew: false, date: "2024-07-22", time: "09:00:00" },
        { contents: "New candidate in chatroom", isNew: false, date: "2024-08-10", time: "17:15:00" }
    ];
    const notificationResult = await notifications.insertMany(notificationsData);

    const candidates = db.collection('candidates');
    const candidateData = [
        { id: 1, name: "John Doe", score: 80, interviewDate: "2024-02-25", recruiter: null, earliestStartDate: "2024-02-26", notes: "Impressive technical skills" },
        { id: 2, name: "Jane Smith", score: 90, interviewDate: "2024-02-28", recruiter: null, earliestStartDate: "2024-03-01", notes: "Good communication skills" },
        { id: 3, name: "Mike Johnson", score: 75, interviewDate: "2024-03-02", recruiter: null, earliestStartDate: "2024-03-03", notes: "Strong problem-solving abilities" },
        { id: 4, name: "Emily Brown", score: 85, interviewDate: "2024-03-05", recruiter: null, earliestStartDate: "2024-03-06", notes: "Excellent teamwork" },
        { id: 5, name: "David Lee", score: 95, interviewDate: "2024-03-08", recruiter: "theUser", earliestStartDate: "2024-03-09", notes: "Great leadership potential" },
        { id: 6, name: "Sarah Davis", score: 70, interviewDate: "2024-03-11", recruiter: null, earliestStartDate: "2024-03-12", notes: "Attention to detail" },
        { id: 7, name: "Michael Clark", score: 60, interviewDate: "2024-03-14", recruiter: null, earliestStartDate: "2024-03-15", notes: "Quick learner" },
        { id: 8, name: "Anna Rodriguez", score: 88, interviewDate: "2024-03-17", recruiter: null, earliestStartDate: "2024-03-18", notes: "Adaptable to new technologies" },
        { id: 9, name: "Kevin Martinez", score: 92, interviewDate: "2024-03-20", recruiter: null, earliestStartDate: "2024-03-21", notes: "Strong analytical skills" },
        { id: 10, name: "Jessica Taylor", score: 78, interviewDate: "2024-03-23", recruiter: null, earliestStartDate: "2024-03-24", notes: "Detail-oriented" },
        { id: 11, name: "Ryan White", score: 87, interviewDate: "2024-03-26", recruiter: "theUser", earliestStartDate: "2024-03-27", notes: "Excellent problem-solving abilities" },
        { id: 12, name: "Amanda Thomas", score: 83, interviewDate: "2024-03-29", recruiter: null, earliestStartDate: "2024-03-30", notes: "Good communication skills" },
        { id: 13, name: "Chris Wilson", score: 79, interviewDate: "2024-04-01", recruiter: null, earliestStartDate: "2024-04-02", notes: "Strong technical knowledge" },
        { id: 14, name: "Samantha Garcia", score: 91, interviewDate: "2024-04-04", recruiter: null, earliestStartDate: "2024-04-05", notes: "Great attention to detail" },
        { id: 15, name: "Daniel Brown", score: 76, interviewDate: "2024-04-07", recruiter: null, earliestStartDate: "2024-04-08", notes: "Quick learner" },
        { id: 16, name: "Rachel Miller", score: 84, interviewDate: "2024-04-10", recruiter: null, earliestStartDate: "2024-04-11", notes: "Strong problem-solving abilities" },
        { id: 17, name: "Justin Anderson", score: 82, interviewDate: "2024-04-13", recruiter: null, earliestStartDate: "2024-04-14", notes: "Excellent teamwork" },
        { id: 18, name: "Lauren Martinez", score: 97, interviewDate: "2024-04-16", recruiter: "theUser", earliestStartDate: "2024-04-17", notes: "Great leadership potential" },
        { id: 19, name: "Matthew Taylor", score: 89, interviewDate: "2024-04-19", recruiter: null, earliestStartDate: "2024-04-20", notes: "Adaptable to new technologies" },
        { id: 20, name: "Olivia Harris", score: 93, interviewDate: "2024-04-22", recruiter: null, earliestStartDate: "2024-04-23", notes: "Strong analytical skills" },
        { id: 21, name: "Andrew Johnson", score: 77, interviewDate: "2024-04-25", recruiter: null, earliestStartDate: "2024-04-26", notes: "Detail-oriented" },
        { id: 22, name: "Michelle Davis", score: 68, interviewDate: "2024-04-28", recruiter: null, earliestStartDate: "2024-04-29", notes: "Quick learner" },
        { id: 23, name: "Brandon Jackson", score: 96, interviewDate: "2024-05-01", recruiter: "theUser", earliestStartDate: "2024-05-02", notes: "Excellent problem-solving abilities" },
        { id: 24, name: "Stephanie Thompson", score: 81, interviewDate: "2024-05-04", recruiter: null, earliestStartDate: "2024-05-05", notes: "Good communication skills" },
        { id: 25, name: "Nicholas Wilson", score: 74, interviewDate: "2024-05-07", recruiter: null, earliestStartDate: "2024-05-08", notes: "Strong technical knowledge" },
        { id: 26, name: "Hannah Lewis", score: 86, interviewDate: "2024-05-10", recruiter: null, earliestStartDate: "2024-05-11", notes: "Great attention to detail" },
        { id: 27, name: "William Brown", score: 73, interviewDate: "2024-05-13", recruiter: null, earliestStartDate: "2024-05-14", notes: "Quick learner" },
        { id: 28, name: "Ashley Garcia", score: 98, interviewDate: "2024-05-16", recruiter: "theUser", earliestStartDate: "2024-05-17", notes: "Excellent teamwork" },
        { id: 29, name: "Edward Martinez", score: 90, interviewDate: "2024-05-19", recruiter: null, earliestStartDate: "2024-05-20", notes: "Great leadership potential" },
        { id: 30, name: "Madison Lee", score: 94, interviewDate: "2024-05-22", recruiter: null, earliestStartDate: "2024-05-23", notes: "Adaptable to new technologies" },
        { id: 31, name: "Joshua Harris", score: 72, interviewDate: "2024-05-25", recruiter: null, earliestStartDate: "2024-05-26", notes: "Strong analytical skills" }
    ];
    const candidateResult = await candidates.insertMany(candidateData);

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
    const challengeId = await challenges.insertOne({
        passcode: '1234',
        recruiterId: adminExists._id
    });
    console.log("Here's the initial challenge id:", challengeId);
}

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
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

/** Get the singleton MongoDB connection */
export async function getDb() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DB);
        await seed(db);
        return db;
    } catch(e) {
        console.error('Couldn\'t get Mongo Database', e);
    }
};
