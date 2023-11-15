
import React, { PropsWithoutRef } from 'react';
import { Button, Box, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import "./style.scss"



const ConfirmDialog = (props: PropsWithoutRef<{
    open: boolean;
    onClose?: (e: any) => void;
    title?: string;
    content?: string;
    image?: string;
    btnSuccess?: string;
    btnFail?: string;
    isSuccess: boolean;
}>) => {
    const {
        open,
        onClose,
        title = "",
        content = <></>,
        image,
        btnSuccess,
        btnFail,
        isSuccess
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="dialog"
            sx={{
                "& .MuiDialog-paper": {
                    width: '560px',
                    height: '329px',
                },
            }}
        >
            <Box sx={{ textAlign: 'center', mt: '27px' }}>
                <img src={image} />
            </Box>
            <DialogTitle>
                <Typography className="dialog-title"
                    sx={{
                        ...(isSuccess ? {} : { color: "#DC2626" }),
                    }}
                >
                    {title}
                </Typography>

            </DialogTitle>
            <Box sx={{ maxWidth:"331px" , margin:"auto"}}>
                <Typography className="dialog-content" component="h6" >
                    {content}
                </Typography>
            </Box >
            <Grid container sx={{ maxWidth: "60%", margin: 'auto', alignItem: 'center', mb: 4 }}>
                <Grid item xs={6} >
                    <Button
                        className="dialog-btn-fail"
                        variant="contained"
                        sx={{
                            backgroundColor: '#E7EAEE', color: "#323A46", fontSize: "16px", fontWeight: 600, textTransform: "math-auto", "&:hover": {
                                backgroundColor: '#E7EAEE', color: "#323A46"
                            }
                        }}
                        onClick={onClose}
                    >
                        {btnFail}
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        className="dialog-btn-success"
                        variant="contained"
                        sx={{
                            backgroundColor: "#19B88B", fontSize: "16px", fontWeight: 600, color: "#FFFFFF", textTransform: "math-auto",
                            "&:hover": {
                                backgroundColor: "#19B88B", color: "#FFFFFF"
                            }
                        }}
                        onClick={onClose}
                    >
                        {btnSuccess}
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default ConfirmDialog;
