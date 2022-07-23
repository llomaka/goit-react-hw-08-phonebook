import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter';
import { changeFilter } from 'redux/filter/filterSlice';
import { Typography, Box, TextField } from '@mui/material';
import debounce from 'lodash.debounce';

export default function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const debouncedFilter = debounce((text) => dispatch(changeFilter(text)), 350);

  const onChange = event => {
    debouncedFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        textAlign: 'center',
        marginBottom: '15px',
      }}
    >
      <Typography>Find contact by name</Typography>
      <TextField
        variant='standard'
        type='text'
        name='filter'
        onChange={onChange}
        value={filter}
      />
    </Box>
  );
}
