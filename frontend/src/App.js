import React, { useEffect, useState } from "react";
import { fetchIssues } from "./api";

import Issue from "./Components/Issue";
import CreateIssue from "./Components/CreateIssue";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function App() {
  const [issues, setIssues] = useState([]);
  const [requestData, setRequestData] = useState(new Date());
  const [requestCreateDate, setRequestCreateData] = useState(new Date());

  useEffect(() => {
    fetchIssues().then((res) => setIssues(res.data));
  }, [requestData, requestCreateDate]);

  return (
    <Box m={4}>
      <Typography
        variant="h2"
        component="h2"
        align="center"
        color="primary"
        gutterBottom
      >
        Issue Tracker
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box mx="auto">
            <CreateIssue setRequestCreateData={setRequestCreateData} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          {issues.map((data) => (
            <Issue
              key={data._id}
              id={data._id}
              createdAt={data.createdAt}
              assignTo={data.assignTo}
              priority={data.priority}
              desc={data.description}
              setRequestData={setRequestData}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
