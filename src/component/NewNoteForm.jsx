import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function FormAddClock(props) {
  const [form, setForm] = useState({
    text: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (form.text !== '') {
      const newNote = {
        text: form.text,
      };

      props.onFormSubmit(newNote);
      setForm({
        text: '',
      });
    }
  };

  return (
    <form>
      <label>Добавить запись</label>
      <textarea name='text' onChange={handleChange} value={form.text} />
      <div className="material-icons send" onClick={handleSubmit}>send</div>
    </form>
  );
}

FormAddClock.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};