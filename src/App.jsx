import React from 'react'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Landing from './pages/landing';
import Nav from './components/Nav';
import signUp from './pages/signIn';
import SignIn from './pages/signIn';




const App = () => {
  return (
    <Router>
      <Nav/>
   <Routes>
   
    <Route path="/" element={<Landing/>} />
    <Route path="/signUp" element={<signUp />} />
    <Route path="/signin" element={<SignIn />}/>

   </Routes>
   </Router>
  )
}

export default App
