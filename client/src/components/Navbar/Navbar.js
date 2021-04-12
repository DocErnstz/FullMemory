import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";

import useStyles from "./styles";
import memories from "../../images/memories.png";

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
                Memories
            </Typography>
            <img src={memories} alt="icon" height="60" className={classes.image}/>
        </AppBar>
    );
}

export default Navbar;