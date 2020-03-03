import React, { useState } from 'react'; //useState  -> hook
import Navbar from './components/Navbar';
import MasterHead from './components/MasterHead';

function App() {
  //const [title,setTitle] = useState('Clone de Meetup')
  return (
  <>
   <Navbar/>
   <MasterHead title={"Clone Meetup"} 
   subtitle="Este es un clone educacional de meetup"/>
   {/* 
     <button className="btn btn-danger"  
   onClick={ () => setTitle("Titulo desde el click")  }
   >Cambiar titulo</button>
   
   */}
  
  </>
  );
}

export default App;
