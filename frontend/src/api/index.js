import axios from 'axios';

const URL = 'http://localhost:5000/issues';

export const fetchIssues = () => axios.get(URL);

export const createIssue = (newIssue) => axios.post(URL, newIssue);