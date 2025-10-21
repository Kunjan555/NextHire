import './App.css';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import AccountProvider from './components/AccountProvider';

function App() {
  return (
  <AccountProvider>
  <BrowserRouter>
    <Header/>
    </BrowserRouter>
  </AccountProvider>
  );
}

export default App;