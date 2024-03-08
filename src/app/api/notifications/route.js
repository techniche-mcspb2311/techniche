import { getDb } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const db = await getDb();
    const notifications = db.collection('notifications');

    const cs = await notifications.find({}).toArray();

    return Response.json(cs);
}

export async function POST(request) {
    const db = await getDb();
    const notifications = db.collection('notifications');

    const newNotification = await request.json();

    const result = await notifications.insertOne(newNotification);

    return Response.json(result);
}