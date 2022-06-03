import ContactList from "./pages/ContactList";
import "./App.css";

import ContactForm from "./pages/ContactForm";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactList />
      <hr />
      <ContactForm />
    </div>
  );
}

export default App;

/// Store: Suatu wadah besar yang menyimpan state secara global
/// Reducer: Suatu fungsi untuk meng-update value yang ada pada Store
/// Dispatch / Action: Proses pemanggilan sebuah instruksi/fungsi yg disediakan/dimiliki oleh reducer
/// Subscribtion: Proses pemanggilan store yang diperlukan
