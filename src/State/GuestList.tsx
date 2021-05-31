import { useState } from "react";

const GuestList:React.FC = () =>{

    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () =>{

        setName('');
        setGuests([...guests, name])

    }
    return <div>
          <h3>Guest list</h3>
          <ul>
              {guests.map((gust) => {
               return   <li key={gust}>            
                      {gust}
                 </li>
              })}
          </ul>
            <input 
            type="text"
            value={name}
            onChange = {(e) => setName(e.target.value)}
            />
            <button onClick={onClick}>Add Guest</button>
        </div>
}

export default GuestList;