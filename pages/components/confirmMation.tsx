import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Router from 'next/router';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConfirmMation: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [open, setOpen] = React.useState(true);
    const router = Router;

    const handleDisagree = () => {
        setOpen(false);
    };

    const handleAgree = () => {
        setOpen(false);
        localStorage.removeItem("item");
        localStorage.removeItem("token");
        router.push("/components/login");
    };

    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Disagree</Button>
                    <Button onClick={handleAgree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmMation;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';
// import Router from 'next/router';

// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// export default function ConfirmMation(props: any) {
    // const router = Router;
    // const { isOpen, onClose } = props;
    // const [open, setOpen] = useState(true);
    // if (!isOpen) return null;

//     const handleClose = () => setOpen(false);

//     const handleAgree = () => {
//         localStorage.removeItem("token")
//         localStorage.removeItem("user")
//         setOpen(false)
//         router.push("/")
//     }
//     return (
//         <div>
//             <Modal
//                 style={{ overflow: "auto" }}
//                 open={open}
//                 onClose={onClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={{ width: "100%" }}>
//                     <Grid container>
//                         <Box sx={style}>
//                             <Typography id="modal-modal-title" variant="h6" component="h2">
//                                 Confirmation
//                             </Typography>
//                             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                                 Are you sure you loguot?
//                             </Typography>
//                             <Button onClick={handleClose}>Cancle</Button>
//                             <Button onClick={handleAgree} autoFocus>
//                                 Agree
//                             </Button>
//                         </Box>
//                     </Grid>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }