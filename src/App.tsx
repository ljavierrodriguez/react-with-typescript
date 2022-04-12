import React, { useState } from 'react';
import './App.css';

interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

let INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'Sergio',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
  }
]

function App() {

  const [subs, setSubs] = useState<Array<Sub>>(INITIAL_STATE);


  return (
    <div className="App">
      <h1>midu subs</h1>
      <ul>
        {
          subs.map((sub) => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
