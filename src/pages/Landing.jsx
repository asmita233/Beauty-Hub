import React from "react";
// import Nav from "./nav";




function Landing(){
    return(
  <>
  {/* <Nav/> */}
  
  
      <div style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8fHww)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', marginTop: '3rem' }}>
      <div style={{ marginTop: '10rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Country of Himalayas</h2>
   
      
      <ul>
      <ul className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
      <li>
        <a href="https://facebook.com" className="text-black-250 hover:text-white-700">
          Facebook
        </a>
      </li>
      <li>
        <a href="https://twitter.com" className="text-black-740 hover:text-white-700">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://instagram.com" className="text-black-500 hover:text-white-700">
          Instagram
        </a>
      </li>
      <li>
        <a href="https://youtube.com" className="text-red-500 hover:text-white-700">
          YouTube
        </a>
      </li>
      <li>
        <a href="https://google.com" className="text-green-500 hover:text-white-700">
          Google
        </a>
      </li>
    </ul>
        </ul>
        </div>
        </div>
  
  </>

    )
};

export default Landing;