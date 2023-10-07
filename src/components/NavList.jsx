import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const NavList=()=>{
    return(
        <Grid container spacing={2} sx={{marginBottom:5}}>
            <Grid item xs={2}>
                <NavItem path="/" label="Home" />
            </Grid>
            <Grid item xs={2}>
                <NavItem path="/fruit" label="Fruit" />
            </Grid>
            <Grid item xs={2}>
                <NavItem path="/speedo" label="Speedo" />
            </Grid>
            <Grid item xs={2}>
                <NavItem path="/monuments" label="Monuments" />
            </Grid>
        </Grid>
    );
}