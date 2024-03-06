import { getDb } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const cs = await candidates.find({}).toArray();

    return Response.json(cs);
}