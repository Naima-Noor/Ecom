import express from 'express';
const router = express.Router();
import {submitRegistration , getRegistrations} from '../controllers/registrationController.js';

router.post('/register', submitRegistration);
router.get('/getApplicant', getRegistrations);

export default router;