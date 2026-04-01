import sgMail from "@sendgrid/mail"
import dotenv from "dotenv"

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export interface emailPayload {
    to: string,
    subject: string,
    body: string
}

export async function sendEmailService(payload: emailPayload): Promise<void> {
    await sgMail.send({
        from: process.env.GMAIL_USER!,  // must be a verified sender in SendGrid
        to: payload.to,
        subject: payload.subject,
        text: payload.body
    })
}