import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt, FaTrash } from "react-icons/fa";
import css from '../ContactList/ContactList.module.css'

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css['list-item']}>
      <div>
        <p><FaUser /> {name}</p>
        <p><FaPhoneAlt /> {number}</p>
      </div>
      <button onClick={handleDelete} className={css['btn-delete']}>
        <FaTrash size={14} />
      </button>
    </li>
  );
};

export default Contact;
