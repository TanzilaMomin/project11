import React, {useState , useEffect} from "react";
import { Card, CardContent,Grid, Button } from "@mui/material";

export const Home=()=>{
    const [greet, setGreet]=useState("day");
    const [msg, setMsg]=useState("");
    
    useEffect(()=>{
        setMsg(`Good ${greet} !!!`)
    }, [greet])

    return(
       <Grid container spacing={2} align="center">
       <Grid item xs={12}>
        <Card sx={{bgcolor:"crimson", color:"white" }}>
            <CardContent>
                <h1>{msg}</h1>
            </CardContent>
        </Card>
       </Grid>
       <Grid item xs={3}>
        <Button onClick={()=>setGreet("Morning")} variant="contained" fullWidth color="success">Morning</Button>
       </Grid>
       <Grid item xs={3}>
        <Button onClick={()=>setGreet("Afternoon")} variant="contained" fullWidth color="success">Afternoon</Button>
       </Grid>
       <Grid item xs={3}>
        <Button onClick={()=>setGreet("Evening")} variant="contained" fullWidth color="success">Evening</Button>
       </Grid>
       <Grid item xs={3}>
        <Button onClick={()=>setGreet("Night")} variant="contained" fullWidth color="success">Night</Button>
       </Grid>
       </Grid>
    );
}