import React, {useState, useEffect} from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Speedo=()=>{
    const [curr, setCurr]=useState(0);
    const [clr, setClr]=useState("yellow");

    useEffect(()=>{
        if(curr>0 && curr<=30){
            setClr("yellow");
        }else if(curr>30 && curr<=55){
            setClr("green");
        }else{
            setClr("red");
        }
    },[curr])

    return(
        <Grid container spacing={2} align="center">
            <Grid item xs={12}>
                <h1>Speedo Meter</h1>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=> curr>0 && setCurr(curr-5)} sx={{height:125}} fullWidth variant="outlined">De Accelerate (-)</Button>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{bgcolor:clr}}>
                    <CardContent>
                        <h1>{curr}</h1>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={()=>curr<100 && setCurr(curr+5)} sx={{height:125}} fullWidth variant="outlined">De Accelerate (+)</Button>
            </Grid>
        </Grid>
    );
}