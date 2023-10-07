import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const NavItem=({path,label})=>{
    return(
        <Link to={path}>
            <Button variant="contained" fullWidth color="secondary">{label}</Button>
        </Link>
    );
}