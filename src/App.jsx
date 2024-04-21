
import css from './index.module.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx'; 
import SearchBox from './components/SearchBox/SearchBox.jsx';

export default function App() {
  return (
    <div className={css['cont-main']}>
      <div>
        <h1 className={css.titletxt}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
