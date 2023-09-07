import express from 'express';
import { createResidency, getAllResidencies } from '../controllers/residencyController.js';

const router = express.Router()

router.post("/create", createResidency)
router.get("/allresidencies", getAllResidencies)

export { router as residencyRoute }