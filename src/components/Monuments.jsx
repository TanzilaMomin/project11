import React, {useState, useEffect} from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

 export const Monuments=()=>{
    const [name, setName]=useState("Charminar");
    const [path, setPath]=useState("");

    useEffect(()=>{
        setPath(`images/${name}.jpg`)
    }, [name])
    return(
        <Grid container spacing={2} align="center">
            <Grid item xs={12}>
                <Card sx={{bgcolor:"lightskyblue"}}>
                    <CardContent>
                        <h1>{name}</h1>
                        <img height={300} src={path} alt={name} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("Charminar")} variant="contained" color="success" fullWidth>Charminar</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("mysore")} variant="contained" color="success" fullWidth> Mysore Palace</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("RedFort")} variant="contained" color="success" fullWidth>Red Fort</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("Tajmahal")} variant="contained" color="success" fullWidth>Taj Mahal</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("Victoria-Palace")} variant="contained" color="success" fullWidth>Victoria Palace</Button>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={()=>setName("Gateway-of-India")} variant="contained" color="success" fullWidth>Gateway-of-India</Button>
            </Grid>
        </Grid>
    );
}