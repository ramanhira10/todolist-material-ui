import React from 'react';
import {makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

export default function DenseBar () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar variant="dense">
                    <Typography variant="h5" color="primary">My Tasks</Typography>
                </Toolbar> 
            </AppBar>
        </div>
    );
}