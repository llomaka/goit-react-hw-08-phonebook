import { useState, useId } from 'react';

export default function useContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = useId();
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return { name, setName, number, setNumber, id, openModal, setOpenModal, handleInputChange, resetForm };
}
