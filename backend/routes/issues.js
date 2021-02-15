import express from "express";
import Issue from "../models/Issue.js";

import { getIssues, createIssue, deleteIssue } from "../controllers/issues.js";

const router = express.Router();

// Get all issues
router.get("/", getIssues);

// Create new issue
router.post("/", createIssue);

// Delete issue
router.delete("/:issueId", deleteIssue);

export default router;
