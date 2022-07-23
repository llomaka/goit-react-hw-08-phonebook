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

  const setMessage = (message) => setSnackbar(prevState => {
    return {
      'open': true,
      'message': message,
    }
  })

  return { open: snackbar.open, message: snackbar.message, setMessage, handleClose };
}
