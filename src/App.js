import React, { useState } from 'react'; //useState  -> hook
import { ApolloProvider } from '@apollo/react-hooks';
import Navbar from './components/Navbar';
import MasterHead from './components/MasterHead';
import client from './graphql';

function App() {
  //const [title,setTitle] = useState('Clone de Meetup')
  return (
  <ApolloProvider client={client}>
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
  </ApolloProvider>
  );
}

export default App;
