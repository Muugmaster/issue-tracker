import React, { useState } from "react";
import moment from "moment";
import { deleteIssue } from "../api";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Issue = ({ id, createdAt, assignTo, priority, desc, setRequestData }) => {
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setRequestData(new Date());
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    //console.log(e.currentTarget.value);
    await deleteIssue(e.currentTarget.value).then(setOpen(true));
  };

  return (
    <Grid item xs={12} lg={4}>
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
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Deleting issue...
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Issue;
