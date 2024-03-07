import {getDb} from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const db = await getDb();
    const collection = db.collection('events');

    const events = await collection.find({}).toArray();
    console.log("here", events)

    return Response.json(events);
}
