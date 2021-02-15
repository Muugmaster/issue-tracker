import React from "react";
import moment from "moment";
import { deleteIssue } from "../api";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Issue = ({ id, createdAt, assignTo, priority, desc, setRequestData }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    //console.log(e.currentTarget.value);
    deleteIssue(e.currentTarget.value);
    setRequestData(new Date());
  };

  return (
    <Grid item xs={12} lg={10}>
      <Box mb={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Issue ID: {id}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Created: {moment(createdAt).format("L")}
            </Typography>
            <Typography color="textSecondary">
              Assigned To: {assignTo}
            </Typography>
            <Typography color="textSecondary">Priority: {priority}</Typography>
            <Typography variant="body2" component="p">
              {desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              size="small"
              type="submit"
              value={id}
              onClick={handleDelete}
            >
              Delete Issue
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};

export default Issue;
