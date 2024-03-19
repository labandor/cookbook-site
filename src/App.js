import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './screens/About/About.jsx';
import Home from './screens/Home/Home.jsx';
import Browse from './screens/Browse/Browse.jsx';
import Create from './screens/Create/Create.jsx';
import Details from './screens/Details/Details.jsx';
import Edit from './screens/Edit/Edit.jsx';
import SignIn from './screens/SignIn/SignIn.jsx';
import SignOut from './screens/SignOut/SignOut.jsx';
import SignUp from './screens/SignUp/SignUp.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { verifyUser } from './services/user.js';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
	  <Nav />
	  <Routes>
	  	<Route path="/" element={<Home />} />
	  	<Route path="/about" element={<About />} />
		<Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        	<Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        	<Route path="/sign-out" element={<SignOut setUser={setUser} />} />
	  	<Route path="/browse" element={<Browse />} />
	  	<Route path="/recipe/:id" element={<Details user={user} />} />
	 	<Route path="/add-recipe" element={
			user ? <Create user={user} /> : <Navigate to="/sign-up" />
		} />
	  	<Route path="/recipe/:id/edit" element={
			user ? <Edit user={user} /> : <Navigate to="/" />
		} />
	  </Routes>
    </div>
  );
}

export default App;
