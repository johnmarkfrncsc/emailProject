import axios from "axios"


export interface emailPayload {
    to: string,
    subject: string,
    body: string
}

export async function sendEmail(payload:emailPayload): Promise <void> {
    
    try {
        const baseURL = process.env.VITE_APP_API_URL
         await axios.post(`${baseURL}api/send-email`, payload)
    } catch (error) {
        console.log("Error in emailService.tsx", error)
    }
}

