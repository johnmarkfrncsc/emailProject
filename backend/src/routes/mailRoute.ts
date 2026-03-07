import { Router } from "express";
import mailController from "../controllers/mailController";


const router = Router()
    router.post("/send-email", mailController.sendEmail)


export default router