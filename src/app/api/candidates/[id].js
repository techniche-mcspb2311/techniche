import { getDb } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    try {
        const db = await getDb();
        const candidates = db.collection('candidates');

        const cs = await candidates.find({}).toArray();

        return Response.json(cs);
    } catch (error) {
        console.error('Error retrieving candidates:', error);
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}