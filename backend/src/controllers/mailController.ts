import type { emailPayload } from "../services/mailService"
import { Request, Response } from "express"
import { sendEmailService } from "../services/mailService"


const sendEmail = async (req: Request, res: Response) => {
    const {to, body, subject} = req.body

    if(!to || !body || !subject){
        return res.status(400).json({
            message:  "Error 400"
        })
    }
try {
    await sendEmailService({to, body, subject})
    return res.status(200).json({
        success:true,
        message: "Successfully send an email"
    })
} catch (error) {
    console.log("Error with: ", error)
    res.status(500).json({
        message: "Server error 500"
    })
    
}
}

export default {sendEmail};