import { useState } from 'react';

export default function useSnackbar() {
  const [snackbar, setSnackbar] = useState({
    'open': false,
    'message': ''
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(prevState => {
      return {
        ...prevState,
        'open': false,
      }
    });
  };

  const setOpen = () => setSnackbar(prevState => {
    return {
      ...prevState,
      'open': true,
    };
  });

  const setMessage = (message) => setSnackbar(prevState => {
    return {
      ...prevState,
      'message': message,
    }
  })

  return { open: snackbar.open, setOpen, message: snackbar.message, setMessage, handleClose };
}
