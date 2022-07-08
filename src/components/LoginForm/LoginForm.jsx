import { useState } from 'react';
// import { useLoginUserMutation } from 'redux/authorizationSlice';
import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';
// import ClipLoader from "react-spinners/ClipLoader";
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailInputId = nanoid();
  const passwordInputId = nanoid();
  // const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // await loginUser({ email, password });
    // toast.info(`${name} is successfully added to Contacts List!`);
    resetForm();
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
            htmlFor={emailInputId}>
            Email *
          </label>
          <input
            className={styles.input}
            type='email'
            name='email'
            title='Email address'
            required
            id={emailInputId}
            placeholder='olomaka@gmail.com'
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={passwordInputId}>
            Password *
          </label>
          <input
            className={styles.input}
            type='password'
            name='password'
            minLength={8}
            title='Password must be longer, than 8 characters, contain at least one number and one uppercase character, not contain spaces and parentheses'
            required
            id={passwordInputId}
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
    </>
  );
};
