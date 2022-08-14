import { Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/redux";

export const ContactErrorField = () => {
  const { error } = useTypedSelector((state) => state.authManager);
  const [open, setOpen] = useState(true);

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
          <Alert severity="success" sx={{ width: "100%" }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
