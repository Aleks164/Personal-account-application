import React  from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesName } from "../utils/routes";
import { useTypedSelector } from "../hooks/redux";

export const UnfoundPage = ()=>{
     const { isAuth } = useTypedSelector(
    (state) => state.authManager
  );
  const backToAppRout = isAuth?RoutesName.HOME_PAGE_ROUTE:RoutesName.LOGIN_ROUTE;
  const backToAppMessage = isAuth?"Back to contacts list":"Back to log in page";
     
    return(        
        <Paper elevation={3} sx={{width:600, height:180,ml:"auto",mr:"auto", mt:"15%"}}>
            <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>   
            <Typography variant="h4" sx={{m:2}}>Sorry, but this page doesn't exist</Typography>  
            <Button
    variant="contained"
    size="small"    
    sx={{ p:2,m:2 }}
    component={Link}
    to={backToAppRout}
  >
    {backToAppMessage}
  </Button>  
  </Grid>
        </Paper>
    )
} 