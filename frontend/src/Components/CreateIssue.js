import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { createIssue } from "../api";

const CreateIssue = ({ setRequestCreateData }) => {
  const [newIssue, setNewIssue] = useState({
    assignTo: "",
    priority: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(newIssue);
    createIssue(newIssue);
    setNewIssue({ assignTo: "", priority: "", description: "" });
    setRequestCreateData(new Date());
  };

  return (
    <Box mx="auto" width="90%">
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl fullWidth={true}>
            <TextField
              id="assignTo"
              select
              label="Assign To"
              helperText="Please select who to assign the issue"
              variant="filled"
              value={newIssue.assignTo}
              onChange={(e) =>
                setNewIssue({ ...newIssue, assignTo: e.target.value })
              }
            >
              <MenuItem key="niko" value="Niko">
                Niko
              </MenuItem>
              <MenuItem key="jalo" value="Jalo">
                Jalo
              </MenuItem>
              <MenuItem key="kalle" value="Kalle">
                Kalle
              </MenuItem>
              <MenuItem key="toni" value="Toni">
                Toni
              </MenuItem>
            </TextField>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true}>
            <TextField
              id="priority"
              select
              label="Priority"
              helperText="Please select priority of the issue"
              variant="filled"
              value={newIssue.priority}
              onChange={(e) =>
                setNewIssue({ ...newIssue, priority: e.target.value })
              }
            >
              <MenuItem key="low" value="Low">
                Low
              </MenuItem>
              <MenuItem key="medium" value="Medium">
                Medium
              </MenuItem>
              <MenuItem key="high" value="High">
                High
              </MenuItem>
              <MenuItem key="very-high" value="Very-High">
                Very High
              </MenuItem>
            </TextField>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth={true}>
            <TextField
              id="description"
              label="Description"
              helperText="Add description for the issue"
              multiline
              rows={4}
              variant="filled"
              value={newIssue.description}
              onChange={(e) =>
                setNewIssue({ ...newIssue, description: e.target.value })
              }
            />
          </FormControl>
        </div>
        <Button variant="contained" color="primary" size="large" type="submit">
          Add Issue
        </Button>
      </form>
    </Box>
  );
};

export default CreateIssue;
