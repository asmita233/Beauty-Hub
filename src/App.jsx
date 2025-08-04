import React from 'react'

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Landing from './pages/landing';

const App = () => {
  return (
    <Router>
      <Nav/>
   <Routes>
   
    <Route path="/" element={<Landing/>} />
    <Route path="/signUp" element={<SignUp/>} />
    <Route path="/signIn"  element={<signIn/>}/>

   </Routes>
   </Router>
  )
}

export default App
