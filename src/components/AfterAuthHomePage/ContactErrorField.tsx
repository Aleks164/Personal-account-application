import { Snackbar, Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTypedDispatch,useTypedSelector } from "../../hooks/redux";
import { setError } from "../../store/reducers/authManager";


export const ContactErrorField = () => {
  const { error } = useTypedSelector((state) => state.authManager);
  const [open, setOpen] = useState(true);
  const dispatch = useTypedDispatch();

useEffect(()=>{
    const errorTimeOutId = setTimeout(()=>{
        dispatch(setError(""));
    setOpen(true);
    },5000);
    return ()=>{
         clearTimeout(errorTimeOutId);
         setOpen(true);
         }
},[error]);

  return (
    <>
      {error && (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
