import React from 'react';
import PropTypes from 'prop-types';

export default function Note(props) {
  const { note } = props;

  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div className='block-item-note'>
      <p>{note.text}</p>
      <div className='material-icons delete' onClick={ () => { handleDelete(note.id); } }>clear</div>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};