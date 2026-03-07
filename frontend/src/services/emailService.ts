import axios from "axios"

export interface emailPayload {
    to: string,
    subject: string,
    body: string
}

export async function sendEmail(payload:emailPayload): Promise <void> {
    
    try {
         await axios.post("http://localhost:5000/api/send-email", payload)
    } catch (error) {
        console.log("Error in emailService.tsx", error)
    }
}

