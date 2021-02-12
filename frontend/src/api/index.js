import axios from 'axios';

const URL = 'http://localhost:3000/issues';

export const fetchIssues = () => axios.get(URL);