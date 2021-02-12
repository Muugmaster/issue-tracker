import React, { useEffect, useState } from 'react'
import { fetchIssues } from './api';

import Issue from "./Components/Issue";
import CreateIssue from "./Components/CreateIssue";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


function App() {
  const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetchIssues()
            .then(res => setIssues(res.data))
    }, [])

  return (
    <Box m={4}>
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
    <Box mx="auto">
        <CreateIssue />
    </Box>
      </Grid>
      <Grid item xs={12} lg={6}>
        {issues.map(data => (
          <Issue id={data._id} assignTo={data.assignTo} priority={data.priority} desc={data.description} />
        ))}
      </Grid>
    </Grid>
    </Box>
  );
}

export default App;
