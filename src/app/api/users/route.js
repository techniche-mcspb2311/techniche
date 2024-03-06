import { mailer } from '@/email';
import {getDb} from '@/db';

export const dynamc = 'force-dynamc';

export async function GET(request) {
    const db = await getDb();
    const collection = db.collection('users');

    const users = await collection.find({}).toArray();
    console.log("here", users)

    return Response.json(users);
}
