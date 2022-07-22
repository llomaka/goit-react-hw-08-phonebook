import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter';
import { changeFilter } from 'redux/filter/filterSlice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DebounceInput } from 'react-debounce-input';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changeFilter(event.target.value));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        textAlign: 'center',
        marginBottom: '15px',
      }}
    >
      <Typography variant='h6' component='h2'>Find contact by name</Typography>
        <DebounceInput
          element='input'
          debounceTimeout={700}
          className={styles.input}
          type='text'
          name='filter'
          onChange={onChange}
          value={filter}
        />
    </Box>
  );
}
