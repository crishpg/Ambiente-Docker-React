import React, { useState } from 'react';

interface Dog {
  name: string;
  breed: string;
}

function App() {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const addDog = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && breed) {
      setDogs([...dogs, { name, breed }]);
      setName('');
      setBreed('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🐾 Cadastro de Cachorros (Demo)</h1>
      
      <form onSubmit={addDog} style={{ marginBottom: '20px' }}>
        <input 
          placeholder="Nome do cachorro" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Raça" 
          value={breed} 
          onChange={(e) => setBreed(e.target.value)} 
        />
        <button type="submit">Adicionar</button>
      </form>

      <h2>Lista de Dogs:</h2>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <strong>{dog.name}</strong> - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;