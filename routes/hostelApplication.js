import express from 'express';
import { getApplicationById, getApplications, createApplication, updateApplicationById, deleteApplicationById,  } from '../controllers/hostelApplication.js';

const router = express.Router();

//get, post, put, delete
router.get("/:id", getApplicationById);
router.get("/", getApplications);
router.post("/", createApplication);
router.put("/:id", updateApplicationById);
router.delete("/:id", deleteApplicationById);

export default router;
