import { mailer } from '@/email';

export const dynamic = 'force-dynamic';

export async function GET(request) {
    await mailer.sendMail({
        from: process.env.EMAIL_FROM,
        to: 'athan.clark@gmail.com',
        subject: 'test 1 2',
        text: 'no diggity',
        html: '<b>an overwhelming amount of diggity</b>'
    });

    return Response.json('Ok');
}
