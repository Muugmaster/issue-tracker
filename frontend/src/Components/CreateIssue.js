import React from 'react'

import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const CreateIssue = () => {
    return (
        <Box mx="auto" width="90%">
        <form>
        <div>
            <TextField
                fullWidth={true}
                id="assignTo"
                select
                label="Assign To"
                helperText="Please select who to assign the issue"
                variant="filled"
                >
                <MenuItem key="niko" value="niko">
                    Niko
                </MenuItem>
                <MenuItem key="jalo" value="jalo">
                    Jalo
                </MenuItem>
            </TextField>
        </div>
        <div>
            <TextField
                fullWidth={true}
                id="priority"
                select
                label="Priority"
                helperText="Please select priority of the issue"
                variant="filled"
                >
                <MenuItem key="low" value="low">
                    Low
                </MenuItem>
                <MenuItem key="medium" value="medium">
                    Medium
                </MenuItem>
                <MenuItem key="High" value="high">
                    High
                </MenuItem>
                <MenuItem key="very-high" value="very-high">
                    Very High
                </MenuItem>
            </TextField>
        </div>
        <div>
            <TextField
                fullWidth={true}
                id="description"
                label="Description"
                helperText="Add description for the issue"
                multiline
                rows={4}
                variant="filled"
                />
        </div>
        </form>
        </Box>
    )
}

export default CreateIssue
