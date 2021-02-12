import Issue from '../models/Issue.js';

export const getIssues = async (req, res) => {
    try {
        const issue = await Issue.find();
        res.status(200).json(issue);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createIssue = async (req, res) => {
    const issue = req.body;
    const newIssue = new Issue(issue)

    try {
        const savedIssue = await newIssue.save();
        res.status(201).json(savedIssue);    
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}