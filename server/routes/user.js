import express from 'express';

import { getUser, createUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);
router.get('/', createUser);

export default router;