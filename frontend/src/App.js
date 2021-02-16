import React, { useEffect, useState } from "react";
import { fetchIssues } from "./api";

import Issue from "./Components/Issue";
import CreateIssue from "./Components/CreateIssue";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function App() {
  const [issues, setIssues] = useState([]);
  const [requestData, setRequestData] = useState(new Date());
  const [change, setChange] = useState(true);

  useEffect(() => {
    fetchIssues().then((res) => setIssues(res.data));
  }, [requestData]);

  const handleClick = () => {
    if (change) {
      setChange(false);
      setRequestData(new Date());
    } else {
      setChange(true);
      setRequestData(new Date());
    }
  };

  if (change) {
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
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
          >
            Create Issue
          </Button>
        </Box>
        <Grid container spacing={3}>
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
      </Box>
    );
  }

  if (!change) {
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
        <Box textAlign="center" mb={4}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
          >
            Show Issues
          </Button>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CreateIssue />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default App;
