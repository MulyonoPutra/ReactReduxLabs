import './App.css';

import ContactForm from './pages/ContactForm';
import ContactList from './pages/ContactList';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ContactList />
      <hr />
      <ContactForm />
    </div>
  );
}

export default App;
