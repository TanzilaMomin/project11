import React,{useState, useEffect} from "react";
import { Card,CardContent, Grid, Button } from "@mui/material";

export const Fruit=()=>{
    const [name, setName]=useState("apple");
    const [path, setPath]=useState("");

    useEffect(()=>{
        setPath(`images/${name}.jpg`)
    } , [name])

    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{bgcolor:"crimson", color:"white", textAlign:"center"}}>
                    <CardContent>
                        <h1>{name}</h1>
                        <img  height={200} src={path} alt={name} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("Apple")} variant="contained" fullWidth color="success">Apple</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("Orange")} variant="contained" fullWidth color="success">Orange</Button>
            </Grid>
            <Grid item xs={4}>
                <Button onClick={()=>setName("Strawberry")} variant="contained" fullWidth color="success" >strawberry</Button>
            </Grid>
        </Grid>
    );
}