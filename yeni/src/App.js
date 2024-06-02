import './App.css';
import React from 'react';
import { useState } from 'react';
import Container from './components/container';
import Resim from './components/resim';

function App() {
  const [baslik, setBaslik] = useState("React Öğreniyorum");
  const [numara, setNumara] = useState("2000");
  return (
    <div className="App">
       <Container title ={baslik} number = {numara} />
       <button onClick={() => {setBaslik("Değiştirdim...")}}>Değiştir</button> 
       <hr style ={{width:"120px",color:"gray",}}/>
       <button onClick={() => {setNumara("2024")}}>Numarayı Değiştir</button>
       
       <Resim/>
       
    </div>
  );
}

export default App;
