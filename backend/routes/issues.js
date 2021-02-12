import express from 'express';
import Issue from '../models/Issue.js';

import { getIssues, createIssue } from '../controllers/issues.js';

const router = express.Router();

// Get all issues
router.get('/', getIssues);

// Create new issue
router.post('/', createIssue);

export default router;