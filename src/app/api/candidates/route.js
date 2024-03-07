import { getDb } from '@/db';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const cs = await candidates.find({}).toArray();

    return Response.json(cs);
}

export async function POST(request) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const newCandidate = await request.json();

    const result = await candidates.insertOne(newCandidate);

    return Response.json(result);
}

export async function PATCH(request) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const updatedCandidate = await request.json();

    try {
        const query = { name: updatedCandidate.name }; // Construct the query object based on the name

        const update = {
            $set: updatedCandidate // Use the provided data to construct the update
        };

        const result = await candidates.updateOne(query, update);

        return new Response(JSON.stringify(result), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error("Error updating candidate:", error);
        return new Response("Failed to update candidate", { status: 500 });
    }
}