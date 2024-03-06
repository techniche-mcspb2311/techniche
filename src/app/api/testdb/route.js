import { getDb } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const db = await getDb();
    const collection = db.collection('users');

    const users = await collection.find({}).toArray();

    return Response.json(users);
}
