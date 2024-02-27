import nodemailer from 'nodemailer';

let actualMailer;

if (
    // if all the SMTP config is here
    process.env.SMTP_HOST &&
        process.env.SMTP_PORT &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASSWORD
) {
    // then actually dispatch mail
    actualMailer = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
} else {
    actualMailer = {
        // otherwise just log it to the console
        sendMail: async (obj) => {
            console.log(obj);
        }
    };
}

export const mailer = actualMailer;
