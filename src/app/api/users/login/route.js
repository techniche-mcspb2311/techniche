import { getDb } from '@/db';

export const dynamc = 'force-dynamc';

export async function POST(request) {
    const credentials = await request.json();
    const db = await getDb();
    const collection = db.collection('users');

    console.log('got login request', credentials);
    // const users = await collection.find({}).toArray();

    return Response.json({ email: 'foobar' });
}
