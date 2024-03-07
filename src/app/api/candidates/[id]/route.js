import { getDb } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET(request, { params: { id } }) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const cs = await candidates.find({ id: Number(id) }).toArray();

    return Response.json(cs);
}

export async function PATCH(request, { params: { id } }) {
    const db = await getDb();
    const candidates = db.collection('candidates');

    const body = await request.json();
    const { name, score, interviewDate, earliestStartDate, notes } = body;

    const updatedCandidate = {
        name,
        score,
        interviewDate,
        earliestStartDate,
        notes
    };

    await candidates.updateOne({ id: Number(id) }, { $set: updatedCandidate });

    return Response.json({ message: 'Candidate updated successfully' });
}