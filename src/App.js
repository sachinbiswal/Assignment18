import { useContext } from 'react';
import './App.css';
import { mycontext } from './Component/Context';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';

function App() {
  const {loggedIn} = useContext(mycontext);
  return (
    <div className="App">
    {/* <Login></Login> */}

    {loggedIn ? (
      <div>
        <Navbar />
        <Home />
      </div>
    ) : (
      <Login />
    )}
  </div>
  );
}

export default App;