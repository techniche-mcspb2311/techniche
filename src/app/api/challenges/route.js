import { getDb } from '@/db';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    const { passcode, recruiterId } = await request.json();

    const db = await getDb();
    const challenges = db.collection('challenges');

    // { passcode: '12345', recruiterId: 'asdf234aedfq234sadf' }
    const { insertedId } = await challenges.insertOne({ passcode, recruiterId });

    return Response.json(insertedId.toString());
}

// export async function PATCH(request) {
//     const data = await request.json();
//     const _id = new ObjectId(data._id);
//     const passcode = data.passcode || null;
//     const recruiterId = data.recruiterId || null;

//     const db = await getDb();
//     const challenges = db.collection('challenges');

//     // { passcode: '12345', recruiterId: 'asdf234aedfq234sadf' }
//     await challenges.updateOne(_id, { $set: { passcode, recruiterId }});

//     return Response.json(_id.toString());
// }

export async function DELETE(request) {
    const data = await request.json();
    const _id = new ObjectId(data._id);

    const db = await getDb();
    const challenges = db.collection('challenges');

    // { passcode: '12345', recruiterId: 'asdf234aedfq234sadf' }
    await challenges.deleteOne({ _id });

    return Response.json('deleted');
}

export async function GET(request) {
    const db = await getDb();
    const challenges = db.collection('challenges');

    const cs = await challenges.find({}).toArray();

    return Response.json(cs);
}
