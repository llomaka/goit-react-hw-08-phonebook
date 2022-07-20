import { useState, useId } from 'react';
import { authOperations } from 'redux/authorization';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(authOperations.createUser({ name, email, password }));
    // toast.info(`User ${name} is successfully created!`);
    resetForm();
    navigate('/contacts');
  };

  return (
    <>
      <form
        className={styles.form}
        autoComplete='on'
        onSubmit={handleSubmit}
      >
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={id + 'name'}>
            Name *
          </label>
          <input
            className={styles.input}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={id + 'name'}
            placeholder='Oleksandra Lomaka'
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={id + 'email'}>
            Email *
          </label>
          <input
            className={styles.input}
            type='email'
            name='email'
            title='Email address'
            required
            id={id + 'email'}
            placeholder='olomaka@gmail.com'
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={id + 'password'}>
            Password *
          </label>
          <input
            className={styles.input}
            type='password'
            name='password'
            minLength={8}
            title='Password must be longer, than 8 characters, contain at least one number and one uppercase character, not contain spaces and parentheses'
            required
            id={id + 'password'}
            placeholder='pa$sw0rD'
            onChange={handleInputChange}
            value={password}
          />
        </div>
        <button
          className={styles.button}
          type='submit'
          name='submit_button'
          // disabled={isLoading}
        >
          {/* {isLoading && <ClipLoader size={16} color='#fff' />} */}
          {/* {!isLoading && <span>Register</span>} */}
          Register
        </button>
      </form>
      {/* {isSuccess && (<p>{JSON.stringify(data)}</p>)} */}
    </>
  );
};
