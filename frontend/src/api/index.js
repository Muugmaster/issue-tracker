import axios from "axios";

const URL = "http://45.32.154.82:5000/issues";

export const fetchIssues = () => axios.get(URL);

export const createIssue = (newIssue) => axios.post(URL, newIssue);

export const deleteIssue = (id) => axios.delete(`${URL}/${id}`);
