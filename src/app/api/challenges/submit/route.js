import { getDb } from '@/db';
import { mailer } from '@/email';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    // fetch('/api/challenges/submit', { submission: "function () { code ... }", challengeId: 'string' })
    const { submission, challengeId } = await request.json();

    const db = await getDb();
    const challenges = db.collection('challenges');
    const users = db.collection('users');

    // { passcode: '12345', recruiterId: 'asdf234aedfq234sadf' }
    const { recruiterId } = await challenges.findOne({ _id: new ObjectId(challengeId) });
    const { email: recruiterEmail } = await users.findOne({ _id: recruiterId });

    const email = {
        from: process.env.EMAIL_FROM,
        to: recruiterEmail,
        subject: 'Coding Challenge Submitted',
        text: ["Here's their submission", submission].join("\n"),
        html: "<h1>Submission</h1><pre>" + submission + "</pre>",
    };

    await mailer.sendMail(email);

    return Response.json('Email sent!');
}
