import nodemailer from "nodemailer"
import dotenv from "dotenv"


dotenv.config();

export interface emailPayload {
    to: string,
    subject: string,
    body: string
}

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    }
})

export async function sendEmailService(payload: emailPayload) : Promise <void> {

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: payload.to,
        subject: payload.subject,
        text: payload.body
    })

}
