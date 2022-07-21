import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter';
import { changeFilter } from 'redux/filter/filterSlice';
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
        textAlign: 'center',
        marginBottom: '15px',
      }}
    >
      <h2 className={styles.header}>Find contact by name</h2>
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
